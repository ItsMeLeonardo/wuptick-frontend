import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { borderRadius } from '../../assets/css/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    background-color: ${Colors.white};
    padding: 1em;
    border-radius: ${borderRadius};
`;

export const Title = styled.h4`
    margin: 0;
    margin-bottom: 1em;
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${Colors.yellow};
    margin-right: 0.5em;
`;