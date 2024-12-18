import { Minus, Plus } from "@phosphor-icons/react";
import { Container, Input } from "./styles";
import { InputHTMLAttributes } from "react";

export const INPUT_HEIGHT = {
  L: 'L',
  M: 'M',
} as const;

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement>  {
  onMinusClick: () => void,
  onPlusClick: () => void,
  inputHeight?: keyof typeof INPUT_HEIGHT,
}

export function InputNumber({ inputHeight = INPUT_HEIGHT.L, onMinusClick, onPlusClick, ...props }: InputNumberProps) {
  return (
    <Container>
      <button onClick={onMinusClick}><Minus size={14} weight="bold" /></button>
      <Input inputHeight={inputHeight} type="number" {...props} />
      <button onClick={onPlusClick}><Plus size={14} weight="bold" /></button>
    </Container>
  )
}