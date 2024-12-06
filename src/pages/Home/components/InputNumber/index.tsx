import { Minus, Plus } from "@phosphor-icons/react";
import { Container, Input } from "./styles";

export function InputNumber() {
  return (
    <Container>
      <button><Minus size={14} weight="bold" /></button>
      <Input type="number" />
      <button><Plus size={14} weight="bold" /></button>
    </Container>
  )
}