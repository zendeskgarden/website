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
} from '@zendeskgarden/react-draggable';
import { Grid } from '@zendeskgarden/react-grid';
import { MD } from '@zendeskgarden/react-typography';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';

interface IColumnItem {
  id: string;
  value: string;
}

interface IDraggableItemProps extends IDraggableProps {
  value: string;
  isOverlay?: boolean;
  isGrabbed?: boolean;
  tabIndex?: number;
}

interface IDroppableColumnProps {
  isActive: boolean;
  isHighlighted: boolean;
}

const defaultItems: IColumnItem[] = [
  { id: '1', value: 'Pear' },
  { id: '2', value: 'Orange' },
  { id: '3', value: 'Grapes' }
];

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

const announcements: Announcements = {
  onDragStart({ active }) {
    return `Picked up draggable item ${active.id}.`;
  },
  onDragOver({ active, over }) {
    if (over?.id) {
      return `Draggable item ${active.id} is over droppable area ${over.id}. Drop to delete.`;
    }

    return undefined;
  },
  onDragEnd({ active }) {
    return `Draggable item ${active.id} has been deleted.`;
  },
  onDragCancel({ active }) {
    return `Dragging was cancelled. Draggable item ${active.id} was dropped`;
  }
};

const StyledHeading = styled(MD)`
  transition: color 0.2s ease-in-out;
  margin-bottom: ${p => p.theme.space.xs};
  color: ${p => getColor({ variable: 'foreground.default', theme: p.theme })};
`;

const StyledDropzone = styled(Dropzone)`
  min-height: ${p => p.theme.space.base * 34}px;
`;

const StyledDraggableOverlay = styled.div`
  padding: ${p => p.theme.space.xxs} 0;
`;

const StyledCol = styled(Grid.Col)`
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

const DroppableColumn = ({ isActive, isHighlighted }: IDroppableColumnProps) => {
  const { setNodeRef } = useDroppable({ id: 'dropzone' });
  const message = isHighlighted ? 'Drop to delete' : 'Drag fruits here';

  return (
    <StyledDropzone isDanger ref={setNodeRef} isActive={isActive} isHighlighted={isHighlighted}>
      <Dropzone.Message>{message}</Dropzone.Message>
    </StyledDropzone>
  );
};

const Example = () => {
  const [items, setItems] = useState<IColumnItem[]>(defaultItems);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [dropzoneIsHighlighted, setDropzoneIsHighlighted] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  const activeItem = items.find(item => item.id === activeId);

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

      if (overId === 'dropzone') {
        setItems(items.filter(item => item.id !== active.id));
      }

      setActiveId(null);
      setDropzoneIsHighlighted(false);
    },
    [items]
  );

  const onDragCancel = useCallback(() => {
    setActiveId(null);
    setDropzoneIsHighlighted(false);
  }, []);

  return (
    <DndContext
      accessibility={{ announcements }}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
      measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
    >
      <Grid.Row justifyContent="center">
        <Grid.Col sm={4}>
          <StyledHeading isBold>List of produce</StyledHeading>
          <DraggableList>
            {items.map(item => (
              <DraggableListItem key={item.id} {...item} />
            ))}
          </DraggableList>
        </Grid.Col>
        <StyledCol sm={5}>
          <StyledHeading isBold>Yucky fruits</StyledHeading>
          <DroppableColumn isActive={!!activeId} isHighlighted={dropzoneIsHighlighted} />
        </StyledCol>
        <DragOverlay>
          {!!activeItem && (
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
      </Grid.Row>
    </DndContext>
  );
};

export default Example;
