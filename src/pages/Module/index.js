import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import Context, { TaskContextProvider } from '../../context/TaskContext';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { ModuleTabs } from '../../components/Module/ModuleTabs';
import { TasksSection } from './TasksSection';
import { AddNew } from '../../components/AddNew/index';
/* import { Sidebar } from '../../components/Sidebar/index'; */
/* import { Sidebar } from '../../components/Sidebar2/index';
import { ModuleSidebar } from './ModuleSidebar';
import { GetProjectSidebarQuery } from '../../requests/project/GetProjectSidebarQuery'; */
import { DropdownContextProvider } from '../../context/DropdownContext';
import { GetTaskListsAndTasksQuery } from '../../requests/Module/GetTaskListsAndTasksQuery';

import { AddTaskListMutation } from '../../requests/Module/AddTaskListMutation';
import { useUser } from '../../hooks/useUser';

import {
    Container,
    TopContainer,
    RightItemsContainer,
    Title,
    Filter,
    InputSearch,
    ModuleContainer,
    SidebarContainer,
    TitleContainer,
} from './styles';

export const Module = ({ projectId, moduleId, location }) => {
    const path = useLocation();
    const currentURL = path.pathname;
    const { tab, task } = queryString.parse(location.search);
    const {
        setCurrentProject,
        currentUser,
        setTeam,
        getTeamByProjectId,
        projectExistInTeam,
    } = useUser();

    let newList = '';
    const callBackNewList = (value) => {
        newList = value;
    };

    const initModule = () => {
        if (Object.keys(currentUser).length == 0) return;

        let team = getTeamByProjectId(currentUser.teams, projectId);
        if (team) setTeam(team);

        let project = projectExistInTeam(team, projectId);
        if (project) setCurrentProject(project);
    };

    useEffect(() => {
        initModule();
    }, [currentUser.teams]);

    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - Module</title>
            </Helmet>

            <Container>
                {/*  <SidebarContainer>
                    <Sidebar>
                        <GetProjectSidebarQuery projectId={projectId}>
                            {({ data }) => {
                                const project = data.getProject;
                                return <ModuleSidebar project={project} />;
                            }}
                        </GetProjectSidebarQuery>
                    </Sidebar>
                </SidebarContainer> */}
                {/* <SidebarContainer>
                    <Sidebar />
                </SidebarContainer> */}

                <TaskContextProvider>
                    <Context.Consumer>
                        {() => (
                            <GetTaskListsAndTasksQuery moduleId={moduleId}>
                                {({ data }) => {
                                    const module = data.getModule;

                                    return (
                                        <ModuleContainer>
                                            <TopContainer>
                                                <TitleContainer>
                                                    <Title>{module.name}</Title>
                                                </TitleContainer>

                                                <RightItemsContainer>
                                                    <div>
                                                        <Filter>Filter</Filter>
                                                    </div>
                                                    <InputSearch
                                                        type="text"
                                                        placeholder="Search"
                                                    />
                                                </RightItemsContainer>
                                            </TopContainer>

                                            <div className="TabsContainer">
                                                <ModuleTabs
                                                    tab={tab}
                                                    currentURL={currentURL}
                                                    moduleId={moduleId}
                                                />
                                            </div>

                                            <div className="TasksLists">
                                                <DropdownContextProvider>
                                                    <TasksSection
                                                        lists={
                                                            module.task_lists
                                                        }
                                                        moduleId={moduleId}
                                                        taskId={task}
                                                    />
                                                </DropdownContextProvider>
                                                <AddTaskListMutation>
                                                    {({ doCreateList }) => {
                                                        const createList = () => {
                                                            console.log(
                                                                moduleId,
                                                                newList,
                                                                'testing'
                                                            );

                                                            doCreateList(
                                                                moduleId,
                                                                newList
                                                            );
                                                        };
                                                        return (
                                                            <AddNew
                                                                text="Add List"
                                                                icon={true}
                                                                border={true}
                                                                setValue={
                                                                    callBackNewList
                                                                }
                                                                doFunction={
                                                                    createList
                                                                }
                                                            />
                                                        );
                                                    }}
                                                </AddTaskListMutation>
                                            </div>
                                        </ModuleContainer>
                                    );
                                }}
                            </GetTaskListsAndTasksQuery>
                        )}
                    </Context.Consumer>
                </TaskContextProvider>
            </Container>
        </LoggedLayout>
    );
};

Module.propTypes = {
    projectId: PropTypes.string,
    moduleId: PropTypes.string,
    location: PropTypes.object,
};
