import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import ReplyIcon from '../../../assets/images/task-icons/reply-icon.svg';
import TagIcon from '../../../assets/images/task-icons/tag-icon.svg';

export const TaskActionsContainer = styled.div`
    display: flex;
    margin-top: 1em;
`;

export const URLTaskIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${Colors.softGray};
`;

export const ReplyIconSVG = styled(ReplyIcon)`
    fill: ${({ color, hover }) =>
        hover ? Colors.whitePrimary : color ? color : Colors.gray};
`;

export const TagIconSVG = styled(TagIcon)`
    fill: ${({ color, hover }) =>
        hover ? Colors.whitePrimary : color ? color : Colors.gray};
`;
