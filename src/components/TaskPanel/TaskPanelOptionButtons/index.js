import React from 'react';
import PropTypes from 'prop-types';
/* import { ReplyButton } from './ReplyButton'; */
import { TaskActionsContainer } from './styles';
import { AssignedButton } from './AssignedButton';
import { TagButton } from './TagButton/index';
import { ChangeListButton } from './ChangeListButton';
import { GetTagsQuery } from '../../../requests/Tag/GetTagsQuery';
import { GetTaskListsAndTasksQuery } from '../../../requests/Module/GetTaskListsAndTasksQuery';

export const TaskPanelOptionButtons = ({ task, module }) => {
    return (
        <TaskActionsContainer>
            {/*   <ReplyButton /> */}
            <AssignedButton assigned={task.assigned} />
            <GetTaskListsAndTasksQuery moduleId={module._id}>
                {({ data }) => {
                    const lists = data.getModule.task_lists;
                    return <ChangeListButton lists={lists} task={task} />;
                }}
            </GetTaskListsAndTasksQuery>
            <GetTagsQuery>
                {({ data }) => {
                    let tags = data.getTags;
                    return <TagButton tag={task.tag} tags={tags || []} />;
                }}
            </GetTagsQuery>
        </TaskActionsContainer>
    );
};

TaskPanelOptionButtons.propTypes = {
    task: PropTypes.object,
    module: PropTypes.object,
};
