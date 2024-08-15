/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';
import { getColor } from '@zendeskgarden/react-theming';
import { ReactComponent as GripIcon } from '@zendeskgarden/svg-icons/src/12/grip.svg';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const DraggableContainer = styled.div`
  cursor: grab;
  color: ${p => getColor({ variable: 'foreground.subtle', theme: p.theme })};

  &:focus {
    outline: none;
  }
`;
interface IItem {
  id: string;
  name: string;
  exposure: string;
  soil: string;
}

const defaultItems: IItem[] = [
  {
    id: 'raspberries',
    name: 'Raspberries',
    exposure: 'Partial shade',
    soil: 'Moist and slightly acidic'
  },
  {
    id: 'strawberries',
    name: 'Strawberries',
    exposure: 'Full sun',
    soil: 'Medium moisture'
  },
  {
    id: 'grapes',
    name: 'Grapes',
    exposure: 'Full sun',
    soil: 'Rich and well draining'
  },
  {
    id: 'cherries',
    name: 'Cherries',
    exposure: 'Partial sun',
    soil: 'Rich and well draining'
  },
  {
    id: 'tomatoes',
    name: 'Tomatoes',
    exposure: 'Partial shade',
    soil: 'Well draining'
  }
];

const SortableRow = ({ item }: { item: IItem }) => {
  const theme = useTheme();
  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id
  });

  return (
    <Table.Row
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: isDragging
          ? getColor({
              variable: 'background.primaryEmphasis',
              transparency: theme.opacity[300],
              dark: { offset: -100 },
              theme
            })
          : undefined
      }}
    >
      <Table.Cell>
        <DraggableContainer
          {...attributes}
          {...listeners}
          style={isDragging ? { cursor: 'grabbing' } : undefined}
        >
          <GripIcon />
        </DraggableContainer>
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.exposure}</Table.Cell>
      <Table.Cell>{item.soil}</Table.Cell>
    </Table.Row>
  );
};

const Example: React.FC = () => {
  const [items, setItems] = useState(defaultItems);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems(prevItems => {
        const oldIndex = prevItems.findIndex(item => item.id === active.id);
        const newIndex = prevItems.findIndex(item => item.id === over?.id);
        const newItems = arrayMove(prevItems, oldIndex, newIndex);

        return newItems;
      });
    }
  }, []);

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Table>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell isMinimum hidden>
              Draggable grip
            </Table.HeaderCell>
            <Table.HeaderCell>Fruit</Table.HeaderCell>
            <Table.HeaderCell>Sun exposure</Table.HeaderCell>
            <Table.HeaderCell>Soil</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map(item => (
              <SortableRow key={item.id} item={item} />
            ))}
          </SortableContext>
        </Table.Body>
      </Table>
    </DndContext>
  );
};

export default Example;
