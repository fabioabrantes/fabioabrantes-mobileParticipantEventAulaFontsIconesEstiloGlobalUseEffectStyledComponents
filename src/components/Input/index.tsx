import { TextInput, TextInputProps } from "react-native";
import { InputEvento } from "./styles";

interface InputProps extends TextInputProps{
  namePlaceholder?: string;
}
export function Input({ namePlaceholder }: InputProps) {
  return (
    <InputEvento
      placeholder={namePlaceholder}
      placeholderTextColor="#757477"
    />
  )
}