import styled from 'styled-components';
import {
    title,
    subtitle,
    description,
    bold,
    borderRadius,
    regular,
} from '../../assets/css/theme';
import { Colors } from '../../assets/css/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RightItemsContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    ${title}
`;

export const Filter = styled.span`
    ${description};
    font-weight: ${bold};
    margin-right: 20px;
`;

export const InputSearch = styled.input`
    background-color: ${Colors.backgroud};
    height: 30px;
    box-sizing: border-box;
    border: none;
    padding: 10px;
    color: ${Colors.black};
    font-weight: ${bold};
    border-radius: ${borderRadius};
    :focus {
        outline: none;
        border: 1px solid ${Colors.primary};
        border-radius: ${borderRadius};
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        font-weight: ${bold};
        color: ${Colors.gray};
    }
    :-ms-input-placeholder {
        font-weight: ${bold};
        color: ${Colors.gray};
    }
`;

export const SidebarContainer = styled.div`
    width: 25%;
`;

export const ModuleContainer = styled.div`
    padding-bottom: 15px;
    width: 85%;
`;
