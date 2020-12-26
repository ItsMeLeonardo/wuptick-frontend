import gql from 'graphql-tag';

export const gqlGetTaskListsAndTasks = gql`
    query getTaskListsAndTasks($moduleId: ID!) {
        getModule(moduleId: $moduleId) {
            _id
            name
            task_lists {
                _id
                name
                tasks {
                    _id
                    name
                    owner {
                        _id
                    }
                    assigned {
                        _id
                        name
                        last_name
                        avatar
                    }
                    deadline
                    done
                    description
                    created_at
                }
            }
        }
    }
`;