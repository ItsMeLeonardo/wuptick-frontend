import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ModuleItem } from '../ModuleItem';
import { AddNew } from '../../AddNew/index';
import { List } from './styles';
export const ListModules = ({ modules = [] }) => {
    const [columns, setColumns] = useState(['column-1']);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (modules.length > 0) {
            setItems(modules);
        }
    }, [modules]);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        const column = columns[source.index];
        const newItems = Array.from(items);

        const newItem = items.find((item) => item._id == draggableId);

        newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, newItem);

        setItems(newItems);
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="Container" style={{ fontSize: '14px' }}>
                {columns.map((column, index) => (
                    <Droppable droppableId={column} key={index}>
                        {(provided) => (
                            <List
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {items.map((module, index) => (
                                    <li key={module._id}>
                                        <ModuleItem
                                            index={index}
                                            module={module}
                                        />
                                    </li>
                                ))}
                                {provided.placeholder}
                                <AddNew text="Add new module" />
                            </List>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};
