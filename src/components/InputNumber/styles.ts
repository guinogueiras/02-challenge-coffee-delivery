import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { INPUT_HEIGHT } from ".";

export const Container = styled.div`
  background: ${props => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 0 0.5rem;
  gap: 0.125rem;
  

  > button {
    background: transparent;
    display: flex;
    align-items: center;
    
    svg {
      color: ${props => props.theme['purple']};

      &:hover{
        color: ${props => props.theme['purple-dark']};
      }
    }
  }
`;

const INPUT_HEIGHT_SIZE = {
  L: '2.375rem',
  M: '2rem',
} as const;

interface InputProps {
  inputHeight: keyof typeof INPUT_HEIGHT;
}

export const Input = styled.input.withConfig({
  shouldForwardProp: prop => prop !== "inputHeight",
})<InputProps>`
  ${mixins.fonts.textM};
  /* flex: 1; */
  width: 1.5rem;
  height: ${props => INPUT_HEIGHT_SIZE[props.inputHeight]};
  background: transparent;
  color: ${props => props.theme['base-title']};
  border: 0;
  text-align: center;
  
  &:focus {
    /* box-shadow: none; */
    /* border-color: ${props => props.theme['green-500']}; */
  }
  
  &::placeholder {
    /* color: ${props => props.theme['gray-500']}; */
  }

  //remove input number appearance
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

