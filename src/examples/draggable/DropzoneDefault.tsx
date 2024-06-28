/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject, forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Announcements,
  MeasuringStrategy,
  DndContext,
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  KeyboardCoordinateGetter,
  DragOverlay,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  useDraggable,
  useDroppable
} from '@dnd-kit/core';
import {
  Draggable,
  DraggableList,
  Dropzone,
  IDraggableProps
} from '@zendeskgarden/react-drag-drop';
import { Row, Col } from '@zendeskgarden/react-grid';
import { MD } from '@zendeskgarden/react-typography';
import { mediaQuery } from '@zendeskgarden/react-theming';

interface IColumnItem {
  id: string;
  value: string;
}

type IColumns = Record<string, IColumnItem[]>;
interface IDraggableItemProps extends IDraggableProps {
  value: string;
  isOverlay?: boolean;
  isGrabbed?: boolean;
  tabIndex?: number;
}

interface IDroppableColumnProps {
  items: IColumnItem[];
  isActive: boolean;
  isHighlighted: boolean;
}

const defaultColumns: IColumns = {
  draggables: [
    { id: '1', value: 'Pear' },
    { id: '2', value: 'Orange' },
    { id: '3', value: 'Grapes' }
  ],
  dropzone: []
};

const getColumnId = (id: string | undefined | null, columns: IColumns): string | undefined => {
  if (!id) return undefined;

  if (id in columns) {
    return id;
  }

  return Object.keys(columns).find(cId => {
    return columns[cId].findIndex(item => item?.id === id) > -1;
  });
};

const coordinateGetter: KeyboardCoordinateGetter = (event, args) => {
  const { context, currentCoordinates } = args;
  const { active, droppableRects } = context;
  const isDraggableList = active?.data?.current?.type === 'draggable';

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

  return undefined;
};

const getAnnouncements = (count: number): Announcements => ({
  onDragStart({ active }) {
    return `Picked up draggable item ${active.id}.`;
  },
  onDragOver({ active, over }) {
    if (over?.id) {
      return `Draggable item ${active.id} is over droppable area ${over.id}.`;
    }

    return undefined;
  },
  onDragEnd({ active }) {
    return `Draggable item ${active.id} added to dropzone. Dropzone has ${count} items.`;
  },
  onDragCancel({ active }) {
    return `Dragging was cancelled. Draggable item ${active.id} was dropped`;
  }
});

const StyledHeading = styled(MD)`
  margin-bottom: ${p => p.theme.space.xs};
`;

const StyledDropzone = styled(Dropzone)`
  min-height: ${p => p.theme.space.base * 34}px;
`;

const StyledDraggableOverlay = styled.div`
  padding: ${p => p.theme.space.xxs} 0;
`;

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
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
      <Draggable.Content>{value}</Draggable.Content>
    </Draggable>
  );
});

DraggableItem.displayName = 'DraggableItem';

const StyledDraggable = styled(DraggableItem)`
  cursor: default;

  &:hover {
    background-color: ${p => p.theme.colors.background};
  }
`;

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

const DroppableColumn = ({ items, isActive, isHighlighted }: IDroppableColumnProps) => {
  const { setNodeRef } = useDroppable({ id: 'dropzone' });
  const isEmpty = items.length === 0;
  let message;

  if (isEmpty && isHighlighted) {
    message = 'Drop to add';
  } else if (isEmpty) {
    message = 'Drag fruits here';
  }

  return (
    <StyledDropzone ref={setNodeRef} isActive={isActive} isHighlighted={isHighlighted}>
      {!isEmpty && (
        <DraggableList>
          {items.map(item => (
            <DraggableList.Item key={item.id}>
              <StyledDraggable {...item} />
            </DraggableList.Item>
          ))}
        </DraggableList>
      )}
      {message && <Dropzone.Message>{message}</Dropzone.Message>}
    </StyledDropzone>
  );
};

const Example = () => {
  const [columns, setColumns] = useState<IColumns>(defaultColumns);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [dropzoneIsHighlighted, setDropzoneIsHighlighted] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  const activeItem = columns.draggables.find(item => item.id === activeId);
  const draggableItems = columns.draggables;
  const dropzoneItems = columns.dropzone;
  const dropzoneItemCount = dropzoneItems.length;

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter })
  );

  const onDragStart = useCallback(({ active }: DragStartEvent) => {
    setActiveId(active.id as string);
  }, []);

  const onDragOver = useCallback(({ over }: DragOverEvent) => {
    setDropzoneIsHighlighted((over?.id as string) === 'dropzone');
  }, []);

  const onDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const overId = over?.id;

      if (!overId) {
        setActiveId(null);

        return;
      }

      const activeColId = getColumnId(active.id as string, columns);
      const overColId = getColumnId(overId as string, columns);

      if (!overColId || !activeColId) return;

      if (overId in columns) {
        setColumns({
          [activeColId]: columns[activeColId].filter(item => item.id !== active.id),
          [overColId]: [...columns[overColId], activeItem!]
        });
      }

      setActiveId(null);
      setDropzoneIsHighlighted(false);
    },
    [columns, activeItem]
  );

  const onDragCancel = useCallback(() => {
    setActiveId(null);
    setDropzoneIsHighlighted(false);
  }, []);

  return (
    <DndContext
      accessibility={{ announcements: getAnnouncements(dropzoneItemCount) }}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
      measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
    >
      <Row justifyContent="center">
        <Col sm={4}>
          <StyledHeading isBold>List of produce</StyledHeading>
          <DraggableList>
            {draggableItems.map(item => (
              <DraggableListItem key={item.id} {...item} />
            ))}
          </DraggableList>
        </Col>
        <StyledCol sm={5}>
          <StyledHeading isBold>Favorite fruits</StyledHeading>
          <DroppableColumn
            items={dropzoneItems}
            isActive={!!activeId}
            isHighlighted={dropzoneIsHighlighted}
          />
        </StyledCol>
        <DragOverlay>
          {activeItem && (
            <StyledDraggableOverlay>
              <DraggableItem
                ref={overlayRef}
                id={activeItem.id}
                value={activeItem.value}
                isOverlay
                isGrabbed
              />
            </StyledDraggableOverlay>
          )}
        </DragOverlay>
      </Row>
    </DndContext>
  );
};

export default Example;
