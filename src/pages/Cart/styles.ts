import styled from "styled-components";
import { mixins } from "../../styles/mixins";


export const CartContainer = styled.main`
  display: grid;
  grid-template-columns: 1.1fr 0.8fr;
  max-width: 1160px;
  margin: 0 auto;
  padding: 40px 20px 150px 20px;
  gap: 32px;
`;


export const CompleteSection = styled.section`
`;

export const TitleSection = styled.h3`
  ${mixins.fonts.titleXS}
  color: ${props => props.theme['base-subtitle']};
  margin-bottom: 15px;
`;

export const CompleteBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
`;

export const CompleteCard = styled.div`
  display: grid;
  gap: 32px;
  padding: 40px;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;
`;

const BaseCompleteHead = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    display: inline-block;
  }
  
  > svg {
    margin-right: 8px;
  }
  
  strong {
    ${mixins.fonts.textM}
    color: ${props => props.theme['base-subtitle']};

    display: block;
  }
  
  span {
    ${mixins.fonts.textS}
    color: ${props => props.theme['base-text']};

  }
`;

export const AddressHead = styled(BaseCompleteHead)`
  > svg {
    color: ${props => props.theme['yellow-dark']};
  }
`;

export const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  column-gap: 12px;
  row-gap: 16px;
`;

interface AddressColumnProps {
  size?: string;
}

export const AddressColumn = styled.div<AddressColumnProps>`
  grid-column: span ${props => props.size};
`;

export const PaymentHead = styled(BaseCompleteHead)`
  > svg {
    color: ${props => props.theme['purple']};
  }
`;

export const PaymentFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`;

interface PaymentButtonProps {
  selected?: boolean
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  ${mixins.fonts.buttonM}
  text-transform: uppercase;
  color: ${props => props.theme['base-text']};

  display: flex;
  /* align-items: center; */
  gap: 12px;
  border-radius: 6px;
  padding: 15px;
  background-color: ${props => props.selected ? props.theme['purple-light'] :  props.theme['base-button']};
  border: 1px solid;
  border-color: ${props => props.selected ? props.theme['purple'] :  props.theme['base-button']};

  > svg {
    color: ${props => props.theme['purple']};
  }

  &:hover {
    color: ${props => props.theme['base-subtitle']};
    background-color: ${props => props.theme['base-hover']};
  }
`;

export const ItemSection = styled.section`
`;

export const ItemCard = styled.div`
  display: grid;
  gap: 24px;

  padding: 40px;
  border-radius: 6px 44px;
  background-color: ${props => props.theme['base-card']};
`;

export const ItemContent = styled.div`
  display: flex;
  padding: 8px 4px 32px 4px;
  /* justify-content: space-between; */
  /* gap: 20px; */

  border-bottom: 1px solid ${props => props.theme['base-button']};

  > img {
    width: 64px;
    height: 64px;
    margin-right: 20px;
  }
`;

export const ItemTitle = styled.strong`
  ${mixins.fonts.textM}
`;

export const ItemActionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemPriceBox = styled.div`
  flex: 1;
  text-align: right;

  strong {
    ${mixins.fonts.textM}
    font-weight: 700;
  }
`;

export const RemoveButton = styled.button`
  ${mixins.fonts.buttonM}
  text-transform: uppercase;
  color: ${props => props.theme['base-text']};

  display: flex;
  align-items: center;
  height: 2rem;
  gap: 4px;
  border-radius: 6px;
  padding: 0 8px;
  background-color: ${props => props.theme['base-button']};
  
  > svg {
    color: ${props => props.theme['purple']};
  }
  
  &:hover {
    color: ${props => props.theme['base-subtitle']};
    background-color: ${props => props.theme['base-hover']};

    > svg {
      color: ${props => props.theme['purple-dark']};
    }
  }
`;

export const PricesContent = styled.div`
  display: grid;
  gap: 12px;

  > div {
    display: flex;
    justify-content: space-between;

  }

  span {
    ${mixins.fonts.textS}
    color: ${props => props.theme['base-text']};
  }

  strong {
    ${mixins.fonts.textL}
    font-weight: 700;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const ConfirmButton = styled.button`
  ${mixins.fonts.buttonG}
  text-transform: uppercase;
  color: ${props => props.theme['white']};
  text-align: center;

  border-radius: 6px;
  padding: 12px 8px;
  background-color: ${props => props.theme['yellow']};

  &:hover {
    background-color: ${props => props.theme['yellow-dark']};
  }
`;