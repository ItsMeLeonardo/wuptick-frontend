import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { ShadowSecondary } from '../../assets/css/shared-styles';
import { borderRadius } from '../../assets/css/theme';

export const Dropdown = styled.div`
    position: absolute;
    top: ${({ open }) => (open == true ? '46px' : '40px')};
    width: 300px;
    transform: translateX(-45%);
    background-color: ${Colors.backgroud};
    border: 1px solid ${Colors.white};
    border-radius: ${borderRadius};
    padding: 14px;
    overflow: hidden;
    ${ShadowSecondary};
    opacity: ${({ open }) => (open == true ? 1 : 0)};
    visibility: ${({ open }) => (open == true ? 'visible' : 'hidden')};
    transition: height 500ms ease, all 0.2s ease 0s;
`;
