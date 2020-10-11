import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { ListContainer } from '../../ListContainer/index';
import { Avatar } from '../../Avatar/index';
import { Status } from '../../Status/index';
import {
    HeaderContainer,
    ModuleContainer,
    Notification,
    Title,
    Info,
    Description,
} from './styles';
export const TopicItem = ({ topic }) => {
    const formatDate = (_date) => {
        return dayjs(_date).format('MM/DD/YYYY h:mm A');
    };

    return (
        <ListContainer>
            <HeaderContainer>
                <Avatar
                    size={25}
                    src={topic.owner.avatar}
                    margin="0 0.5em 0 0"
                />
                <div className="TitleContainer">
                    <Title>{topic.name}</Title> <br />
                    <Info>
                        {topic.owner.name} {topic.owner.last_name} -
                    </Info>{' '}
                    <Info>{formatDate(topic.created_at)}</Info>
                </div>
                {/* <Notification>3</Notification> */}
                <ModuleContainer>
                    {/*  */}
                    <Status>{topic.module.name}</Status>
                </ModuleContainer>
            </HeaderContainer>
            <div className="DescriptionContainer">
                <Description>{topic.description}</Description>
            </div>
        </ListContainer>
    );
};

TopicItem.propTypes = {
    topic: PropTypes.object,
};
