import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Botao = styled(TouchableOpacity)`
    height: 44px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border-color: ${props=>props.theme.colors.gray700};
    border-width: 1px;
    padding:0 38px;
`;

export const TitleBotao = styled.Text`
    color: ${props=>props.theme.colors.blue400};
    font-size: ${props=>props.theme.size.sm};
    font-family: ${props=>props.theme.fonts.regular};
`;
