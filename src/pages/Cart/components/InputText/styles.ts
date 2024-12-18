import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";


export const Container = styled.div`
  width: 100%;
  position: relative;

  span {
    ${mixins.fonts.buttonM}
    color: ${props => props.theme['base-label']};
    font-style: italic;
    position: absolute;
    top: 0.6875rem;
    right: 12px;
  }
`;

export const Input = styled.input`
  ${mixins.fonts.textS}
  color: ${props => props.theme['base-text']};

  padding: 12px;

  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};

  &:focus {
    border-color: ${props => props.theme['yellow-dark']};

    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`;