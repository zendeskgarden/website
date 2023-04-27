/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject, forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import {
  Announcements,
  UniqueIdentifier,
  MeasuringStrategy,
  closestCorners,
  DndContext,
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  KeyboardCoordinateGetter,
  DragOverlay,
  CollisionDetection,
  pointerWithin,
  rectIntersection,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  useDraggable,
  useDroppable
} from '@dnd-kit/core';
import {
  AnimateLayoutChanges,
  SortableContext,
  arrayMove,
  defaultAnimateLayoutChanges,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import {
  Draggable,
  DraggableList,
  Dropzone,
  IDraggableProps
} from '@zendeskgarden/react-drag-drop';
import { Row, Col } from '@zendeskgarden/react-grid';
import { MD } from '@zendeskgarden/react-typography';

type IColumns = Record<UniqueIdentifier, IDraggableItem[]>;

interface IDraggableItem {
  id: string;
  value: string;
}

interface IDraggableItemProps extends IDraggableProps {
  value: string;
  isOverlay?: boolean;
  isGrabbed?: boolean;
  tabIndex?: number;
}

interface ISortableItemProps extends IDraggableItemProps {
  showDropMessage: boolean;
}

interface ISortableColumnProps {
  id: string;
  items: IDraggableItem[];
  activeId: UniqueIdentifier | null;
  activeColumnId: UniqueIdentifier | null;
}

const defaultColumns: IColumns = {
  draggables: [
    { id: '1', value: 'Pear' },
    { id: '2', value: 'Orange' },
    { id: '3', value: 'Grapes' }
  ],
  dropped: []
};

const animateLayoutChanges: AnimateLayoutChanges = args =>
  defaultAnimateLayoutChanges({ ...args, wasDragging: true });

const getAnnouncements = (
  getPosition: (id: UniqueIdentifier | undefined) => number,
  count: number | undefined
): Announcements => ({
  onDragStart({ active }) {
    return `Picked up sortable item ${active.id}. Sortable item ${
      active.id
    } is in position ${getPosition(active.id as UniqueIdentifier)} of ${count}`;
  },
  onDragOver({ active, over }) {
    return `Sortable item ${active.id} was moved into position ${getPosition(
      over?.id
    )} of ${count}`;
  },
  onDragEnd({ active, over }) {
    return `Sortable item ${active.id} was dropped at position ${getPosition(
      over?.id
    )} of ${count}`;
  },
  onDragCancel({ active }) {
    return `Dragging was cancelled. Sortable item ${active.id} was dropped.`;
  }
});

function findColumn(
  id: UniqueIdentifier | undefined,
  columns: IColumns
): UniqueIdentifier | undefined {
  if (!id) return undefined;

  if (id in columns) {
    return id;
  }

  return Object.keys(columns).find(cId => {
    return columns[cId].findIndex(item => item?.id === id) > -1;
  });
}

const coordinateGetter: KeyboardCoordinateGetter = (event, args) => {
  const { context, currentCoordinates } = args;
  const { active, droppableRects } = context;
  const isDraggableList = active?.data?.current?.type === 'draggable';

  const isOrphanItem = active?.data.current?.sortable?.items.length === 1;
  const hasNoSortables = active?.data.current?.sortable?.items.length === 0;

  // Prevent orphan sortable item from bouncing between outer and inner droppable areas.
  if (isOrphanItem || hasNoSortables) {
    event.preventDefault();

    return undefined;
  }

  if (isDraggableList && ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
    event.preventDefault();

    const rects = [...droppableRects.values()];
    const target = rects[rects.length - 1];
    const deltaX = target.left;
    const deltaY = target.top;

    switch (event.key) {
      case 'ArrowRight':
        if (currentCoordinates.x > deltaX) return undefined;

        return { y: deltaY, x: deltaX };
      case 'ArrowLeft':
        if (currentCoordinates.x < deltaX) return undefined;

        return { y: deltaY, x: deltaX };
    }
  }

  return sortableKeyboardCoordinates(event, args);
};

const collisionDetection: CollisionDetection = args => {
  const collisions = [...pointerWithin(args), ...rectIntersection(args)];

  if (collisions.length > 0) {
    return closestCorners(args);
  }

  return collisions;
};

const StyledHeading = styled(MD)`
  margin-bottom: ${p => p.theme.space.xs};
`;

const StyledDropzone = styled(Dropzone)`
  min-height: ${p => p.theme.space.base * 34}px;
`;

const DraggableItem = forwardRef<HTMLDivElement, IDraggableItemProps>((props, ref) => {
  const { isOverlay, value, tabIndex, ...restProps } = props;

  useEffect(() => {
    if (isOverlay) {
      const draggableRef = ref as RefObject<HTMLDivElement>;

      if (draggableRef.current) {
        draggableRef.current.focus();
      }
    }
  });

  return (
    <Draggable {...restProps} tabIndex={isOverlay ? -1 : tabIndex} ref={ref}>
      <Draggable.Grip />
      <Draggable.Content>
        <div>{value}</div>
      </Draggable.Content>
    </Draggable>
  );
});

DraggableItem.displayName = 'DraggableItem';

const DraggableListItem = ({ id, value }: IDraggableItemProps) => {
  const { isDragging, attributes, listeners, setNodeRef, setActivatorNodeRef } = useDraggable({
    id: id!,
    data: { type: 'draggable' }
  });

  return (
    <DraggableList.Item ref={setNodeRef}>
      <DraggableItem
        {...attributes}
        {...listeners}
        isPlaceholder={isDragging}
        id={id}
        value={value}
        ref={setActivatorNodeRef}
      />
    </DraggableList.Item>
  );
};

const SortableListItem = ({ id, value, showDropMessage }: ISortableItemProps) => {
  const { active, attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } =
    useSortable({
      id: id!,
      animateLayoutChanges
    });

  const isActiveItem = active?.id === id;
  const transformValue = CSS.Transform.toString(transform);
  const style: React.CSSProperties = {
    transition,
    transform: transformValue,
    opacity: isActiveItem ? 0 : 1
  };

  return (
    <DraggableList.Item ref={setNodeRef} style={style}>
      <DraggableItem
        value={value}
        {...attributes}
        {...listeners}
        style={{ display: showDropMessage ? 'none' : 'flex' }}
        ref={setActivatorNodeRef}
      />
    </DraggableList.Item>
  );
};

const SortableColumn = ({ id, items, activeId, activeColumnId }: ISortableColumnProps) => {
  const { setNodeRef } = useDroppable({ id });
  const isActive = !!activeId;
  const isHighlighted = activeColumnId === id;
  const showDropMessage = items.length === 1 && isHighlighted;

  return (
    <>
      <StyledHeading isBold>Favorite fruits</StyledHeading>
      <StyledDropzone ref={setNodeRef} isActive={isActive} isHighlighted={isHighlighted}>
        <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
          <DraggableList>
            {items.map(item => (
              <SortableListItem {...item} key={item.id} showDropMessage={showDropMessage} />
            ))}
          </DraggableList>
          {items.length === 0 && <Dropzone.Message>Drag to add</Dropzone.Message>}
          {showDropMessage && <Dropzone.Message>Drop item here</Dropzone.Message>}
        </SortableContext>
      </StyledDropzone>
    </>
  );
};

const Example = () => {
  const [columns, setColumns] = useState<IColumns>(defaultColumns);
  const [snapshot, setSnapshot] = useState<IColumns | null>(null);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [startColumnId, setStartColumnId] = useState<UniqueIdentifier | null>(null);
  const [overlayWidth, setOverlayWidth] = useState<number | undefined>(undefined);

  const theme = useTheme();
  const overlayRef = useRef<HTMLDivElement>(null);

  const activeColumnId = activeId ? (findColumn(activeId, columns) as UniqueIdentifier) : null;
  const activeItem = columns[activeColumnId as UniqueIdentifier]?.find(
    item => item.id === activeId
  );

  const draggablesColId = Object.keys(columns)[0];
  const sortablesColId = Object.keys(columns)[1];

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter })
  );

  const onDragStart = ({ active }: DragStartEvent) => {
    const columnId = findColumn(active.id, columns) as UniqueIdentifier;

    setActiveId(active.id);
    setStartColumnId(columnId);
    setSnapshot(columns);
  };

  const onDragOver = useCallback(
    ({ active, over }: DragOverEvent) => {
      const overId = over?.id;

      if (startColumnId === draggablesColId && !overId) {
        setColumns(snapshot!);
        setOverlayWidth(undefined);

        return;
      }

      if (!overId || active.id in columns) return;

      if (overId !== 'dropped' && over?.rect.width && overlayWidth !== over.rect.width) {
        setOverlayWidth(over.rect.width);
      }

      const overColId = findColumn(overId, columns);
      const activeColId = findColumn(active.id, columns);

      if (!overColId || !activeColId) return;

      setColumns(prevColumns => {
        const nextColumns = { ...prevColumns };
        const activeItems = nextColumns[activeColId];
        const overItems = nextColumns[overColId];
        const activeIndex = activeItems.findIndex(item => item.id === active.id);
        const overIndex = overItems.findIndex(item => item.id === overId);
        let newIndex: number;

        if (overId in nextColumns) {
          const length = overItems.length;

          newIndex = length > 0 ? length + 1 : length;
        } else {
          const isBelowLastItem =
            over &&
            overIndex === overItems.length - 1 &&
            active.rect?.current?.translated?.top &&
            active.rect.current.translated.top > over.rect.top + over.rect.height;

          const modifier = isBelowLastItem ? 1 : 0;

          newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
        }

        nextColumns[activeColId] = nextColumns[activeColId].filter(item => item.id !== active.id);

        nextColumns[overColId] = [
          ...nextColumns[overColId].slice(0, newIndex),
          prevColumns[activeColId][activeIndex],
          ...nextColumns[overColId].slice(newIndex, nextColumns[overColId].length)
        ];

        return nextColumns;
      });
    },
    [columns, snapshot, overlayWidth, draggablesColId, startColumnId]
  );

  const onDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const activeColId = findColumn(active.id, columns) as UniqueIdentifier;
      const overId = over?.id;

      if (!overId) {
        setActiveId(null);

        return;
      }

      const overColId = findColumn(overId, columns);

      if (!overColId) return;

      const activeIndex = columns[activeColId].findIndex(item => item.id === active.id);
      const overIndex = columns[overColId].findIndex(item => item.id === overId);

      if (activeIndex !== overIndex) {
        setColumns(prevColumns => {
          const nextColumns = { ...prevColumns };

          nextColumns[overColId] = arrayMove(prevColumns[overColId], activeIndex, overIndex);

          return nextColumns;
        });
      }

      setSnapshot(null);
      setActiveId(null);
      setOverlayWidth(undefined);
    },
    [columns]
  );

  const onDragCancel = () => {
    setColumns(snapshot!);
    setSnapshot(null);
    setActiveId(null);
    setOverlayWidth(undefined);
  };

  const getPosition = (id: UniqueIdentifier | undefined) => {
    if (!id) return 1;

    const activeColId = findColumn(id, columns) as string;
    const itemIndex = columns[activeColId]?.findIndex(item => item.id === id) || 0;

    return itemIndex + 1;
  };

  const activeItemsCount = columns[activeColumnId!]?.length;
  const draggables = columns[draggablesColId];
  const sortables = columns[sortablesColId];

  return (
    <DndContext
      accessibility={{ announcements: getAnnouncements(getPosition, activeItemsCount) }}
      collisionDetection={collisionDetection}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
      measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
    >
      <Row justifyContent="center">
        <Col size={4}>
          <StyledHeading isBold>List of produce</StyledHeading>
          <DraggableList>
            {draggables.map(item => (
              <DraggableListItem key={item.id} {...item} />
            ))}
          </DraggableList>
        </Col>
        <Col size={5}>
          <SortableColumn
            id={sortablesColId}
            items={sortables}
            activeId={activeId}
            activeColumnId={activeColumnId}
          />
        </Col>
        <DragOverlay>
          {activeItem && (
            <div style={{ width: overlayWidth, padding: `${theme.space.xxs} 0` }}>
              <DraggableItem
                ref={overlayRef}
                id={activeItem.id}
                value={activeItem.value}
                isOverlay
                isGrabbed
              />
            </div>
          )}
        </DragOverlay>
      </Row>
    </DndContext>
  );
};

export default Example;
