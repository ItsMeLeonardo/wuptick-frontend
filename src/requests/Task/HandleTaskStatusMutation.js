import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlHandleTaskStatus } from '../graphql/gqlHandleTaskStatus';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const HandleTaskStatusMutation = ({ children }) => {
    const { currentModule } = useUser();

    const [handleStatus, { error, loading, data }] = useMutation(
        gqlHandleTaskStatus,
        {
            onCompleted: (data) => {
                console.log('HandleTaskStatusMutation', data);
            },
        }
    );

    const doHandleStatus = useCallback((taskId, input) => {
        handleStatus({
            variables: {
                taskId,
                input,
            },

            update: (store) => {
                const taskListsData = store.readQuery({
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId: currentModule._id },
                });

                let tempTaskLists = { ...taskListsData.getModule };

                let updatedLists = tempTaskLists.task_lists.map((list) => {
                    let tasks = list.tasks.map((task) => {
                        let updatedTask;
                        if (task._id == taskId) {
                            updatedTask = {
                                ...task,
                                ...input,
                            };
                        } else {
                            updatedTask = task;
                        }
                        return updatedTask;
                    });
                    return { ...list, tasks };
                });

                tempTaskLists = { ...tempTaskLists, task_lists: updatedLists };

                store.writeQuery({
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId: currentModule._id },
                    data: {
                        getModule: {
                            ...tempTaskLists,
                        },
                    },
                });
            },
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doHandleStatus, loading, error, data });
};

HandleTaskStatusMutation.propTypes = {
    children: PropTypes.any,
};
