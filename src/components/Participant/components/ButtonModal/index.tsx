import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { Botao,TitleBotao } from "./styles";

type PropsBotao = TouchableOpacityProps & {
  title: string;
  metodo: () => void;
}
export function ButtonModal({ title, metodo,...rest }: PropsBotao) {
  return (

    <Botao
      onPress={metodo}
      {...rest}
    >
      <TitleBotao>{title}</TitleBotao>
    </Botao>

  )
}