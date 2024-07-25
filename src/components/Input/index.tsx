import { TextInput, TextInputProps } from "react-native";
import { InputEvento } from "./styles";

type InputProps = TextInputProps &{
  namePlaceholder?: string;
}
export function Input({ namePlaceholder, ...rest}: InputProps) {
  return (
    <InputEvento
      placeholder={namePlaceholder}
      placeholderTextColor="#757477"
      {...rest}
    />
  )
}