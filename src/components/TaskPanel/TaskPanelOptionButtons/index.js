import React from 'react';
import { Avatar } from '../../Avatar/index';
import { Colors } from '../../../assets/css/colors';
import { MinimalButton } from '../../MinimalButton/index';
import { TaskActionsContainer, ReplyIconSVG, TagIconSVG } from './styles';

export const TaskPanelOptionButtons = () => {
    return (
        <TaskActionsContainer>
            <MinimalButton color={Colors.blue} name="Answer">
                {(isParentHover) => (
                    <ReplyIconSVG
                        width="18px"
                        height="18px"
                        viewBox="0 0 25 25"
                        color={Colors.blue}
                        hover={isParentHover}
                    />
                )}
            </MinimalButton>
            <MinimalButton color={Colors.primary} name="Jhon D.">
                {() => <Avatar size={22} />}
            </MinimalButton>
            <MinimalButton color={Colors.primary} name="Web">
                {(isParentHover) => (
                    <TagIconSVG
                        width="18px"
                        height="18px"
                        viewBox="0 0 25 25"
                        color={Colors.primary}
                        hover={isParentHover}
                    />
                )}
            </MinimalButton>
        </TaskActionsContainer>
    );
};

TaskPanelOptionButtons.propTypes = {};
