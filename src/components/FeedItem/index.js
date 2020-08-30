import React from 'react';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { Image } from '../Image/index';
import { Avatar } from '../Avatar/index';
import { ListContainer } from '../ListContainer/index';
import {
    Container,
    ImageContainer,
    ActitivityContainer,
    ActivityInfo,
    UserInfo,
    TimeInfo,
    AnchorProject,
    Divider,
    Text,
    User,
    Action,
    Item,
    Time,
    Title,
    ItemContainer,
} from './styles';

export const FeedItem = ({
    user,
    userAvatar,
    description,
    name,
    dateFilter,
    info,
    projectImg,
    type,
}) => {
    const formatDate = (_date) => {
        dayjs.extend(calendar);
        let dateFormated = dayjs(_date).calendar();
        return dateFormated;
    };

    return (
        <Container>
            <ImageContainer>
                <Avatar description="Feed Image" src={userAvatar} size={50} />
            </ImageContainer>
            <ActitivityContainer>
                <ActivityInfo>
                    <UserInfo>
                        {/* <User>{user}</User> <Action>commented on</Action>{' '} */}
                        <User>{user}</User> <Action>{description}: </Action>{' '}
                        <Item>{name}</Item>
                    </UserInfo>
                    <TimeInfo>
                        {/* <Time>Today 8:00pm</Time> */}
                        <Time>{formatDate(dateFilter)}</Time>
                    </TimeInfo>
                </ActivityInfo>
                <ListContainer shadow={true}>
                    <ItemContainer>
                        {type == 'project' ? (
                            <Image
                                src={projectImg}
                                size={30}
                                margin="0 0.5em 0.5em 0"
                            />
                        ) : (
                            ''
                        )}

                        <Title>{name}</Title>
                    </ItemContainer>

                    <Text>{info ? info : ''}</Text>

                    <div>
                        <Divider />
                        <div>
                            <AnchorProject to="/">Project</AnchorProject>
                        </div>
                    </div>
                </ListContainer>
            </ActitivityContainer>
        </Container>
    );
};