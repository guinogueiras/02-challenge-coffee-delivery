import { InputHTMLAttributes } from "react";
import { Container, Input } from "./styles";


export function InputText(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container>
      <Input {...props}/>
      {props.required === false &&(
        <span>Opcional</span>
      )}
    </Container>
  )
}