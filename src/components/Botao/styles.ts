import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

type Props={
    corFundo:string;
}
export const BotaoComponent = styled(TouchableOpacity)<Props>`
    width:56px;
    height:56px;
    border-radius:4px;
    align-items:center;
    justify-content:center;
    background-color: ${props=>props.corFundo};
`;