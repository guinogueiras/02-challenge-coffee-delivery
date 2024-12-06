import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const Container = styled.div`
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 0 24px 24px;
  text-align: center;

  > img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
    align-self: center;
  }

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Tags = styled.div`
  padding: 12px 0;
  gap: 4px;

  span {
    ${mixins.fonts.tag};
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    padding: 4px 8px;
    border-radius: 100px;

    text-transform: uppercase;
  }
`;

export const Title = styled.strong`
  ${mixins.fonts.titleS};
  color: ${props => props.theme['base-subtitle']};
  margin-top: 4px;
`;

export const Description = styled.span`
  ${mixins.fonts.textS};
  color: ${props => props.theme['base-label']};
  margin-top: 8px;
`;

export const Bottom = styled.div`
  margin-top: 32px;
  /* color: ${props => props.theme['base-text']}; */
  `;

export const Currency = styled.span`
  ${mixins.fonts.textS};
  margin-right: 5px;
  `;

export const Price = styled.span`
  ${mixins.fonts.titleM};
  margin-right: 20px;
  `;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${props => props.theme['purple-dark']};
  margin-left: 8px;


  svg {
    color: ${props => props.theme['base-card']};
  }

  &:focus {
    box-shadow: none;
    /* border-color: ${props => props.theme['green-500']}; */
  }

  &::placeholder {
    /* color: ${props => props.theme['gray-500']}; */
  }
`;

