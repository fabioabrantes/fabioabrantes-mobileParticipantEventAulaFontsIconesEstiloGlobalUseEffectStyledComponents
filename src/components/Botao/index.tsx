import { FontAwesome } from '@expo/vector-icons';
import {TouchableOpacityProps} from "react-native";
import { BotaoComponent } from "./styles";

type PropsBotao = TouchableOpacityProps & {
  iconName: "user-plus" | "trash-o";
  cor: "green" | "red" | "#131016" | "#F2F2F2";
  metodo: () => void;
}
export function Botao({ iconName, cor, metodo,...rest }: PropsBotao) {
  
  return (
    <BotaoComponent
      onPress={metodo}
      corFundo={cor}
      {...rest}
    >

      <FontAwesome name={iconName} size={24} color="white" />
    </BotaoComponent>
  )
}