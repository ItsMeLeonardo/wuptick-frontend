import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { bold, borderRadius } from '../../assets/css/theme';

export const Status = styled.div`
    font-size: 13px;
    padding: 0px 15px;
    font-weight: ${bold};
    color: ${({ color }) => (color ? color : Colors.black)};
    background: ${Colors.white};
    border-radius: 20px;
    border: 1px solid ${({ color }) => (color ? color : Colors.black)};
    line-height: 2;
    width: 81px;
`;
