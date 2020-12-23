import React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDragDrop } from '../../../hooks/useDragDrop';
import { TaskListItems } from '../TaskListItems';
import { AddNew } from '../../AddNew/index';
import {
    TaskList as TaskListStyled,
    TaskListHeader,
    TaskListTitle,
    ColumnHeader,
    ColumnName,
    TaskListColumns,
    Placeholder,
    TaskListItemsContainer,
    AddNewContainer,
} from './styles';

export const TaskList = ({
    list = {},
    columnKey,
    columnId,
    placeholderProps,
}) => {
    return (
        <Draggable draggableId={`${columnId}-${columnKey}`} index={columnKey}>
            {(provided, snapshot) => (
                <TaskListStyled
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <TaskListHeader>
                        <TaskListTitle
                            isDragging={snapshot.isDragging}
                            {...provided.dragHandleProps}
                        >
                            {list.name}
                        </TaskListTitle>
                        <TaskListColumns isDragging={snapshot.isDragging}>
                            <ColumnHeader>
                                <ColumnName>Asignee</ColumnName>
                            </ColumnHeader>
                            <ColumnHeader>
                                <ColumnName>Deadline</ColumnName>
                            </ColumnHeader>
                            <ColumnHeader>
                                <ColumnName>Favorite</ColumnName>
                            </ColumnHeader>
                        </TaskListColumns>
                    </TaskListHeader>
                    <Droppable
                        droppableId={columnId}
                        key={columnKey}
                        type="task"
                    >
                        {(provided) => (
                            <TaskListItemsContainer
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                isDragging={snapshot.isDragging}
                            >
                                <TaskListItems tasks={list.tasks} />
                                {provided.placeholder}
                                {/*   {Object.keys(placeholderProps).length !== 0 &&
                                    snapshot.isDraggingOver && (
                                        <Placeholder
                                            top={placeholderProps.clientY}
                                            left={placeholderProps.clientX}
                                            height={
                                                placeholderProps.clientHeight
                                            }
                                            width={placeholderProps.clientWidth}
                                            isDragging={snapshot.isDraggingOver}
                                        />
                                    )} */}
                            </TaskListItemsContainer>
                        )}
                    </Droppable>
                    <AddNewContainer isDragging={snapshot.isDragging}>
                        <AddNew
                            text="Add Task"
                            icon={true}
                            border={false}
                            bgColor="transparent"
                        />
                    </AddNewContainer>
                </TaskListStyled>
            )}
        </Draggable>
    );
};

TaskList.propTypes = {};
