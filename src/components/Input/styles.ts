import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputEvento = styled(TextInput)`
   background-color:${props=> props.theme.colors.gray600};
    flex:1;
    height:56px;
    border-radius:4px;
    padding:8px;
    font-size:${props=> props.theme.size.xxm};
    color:${props=> props.theme.colors.white};
    font-family:${props=> props.theme.fonts.regular};
`;
