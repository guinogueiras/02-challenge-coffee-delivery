import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash
} from "@phosphor-icons/react";

import { CoffeeType } from "../Home";
import { InputNumber } from "../../components/InputNumber";
  
import {
  CompleteSection,
  CartContainer,
  ItemSection,
  TitleSection,
  CompleteBox,
  CompleteCard,
  ItemCard,
  AddressHead,
  PaymentHead,
  PaymentFooter,
  ConfirmButton,
  ItemContent,
  PricesContent,
  RemoveButton,
  PaymentButton,
  ItemActionBox,
  ItemPriceBox,
  ItemTitle,
  AddressGrid,
  AddressColumn,
} from "./styles";
import { InputText } from "./components/InputText";

export interface ItemCartType {
  coffee: CoffeeType;
  quantity: number;
}

export function Cart() {

  function createId() {
    return String(Math.random() * (new Date().getTime() - 1) + 1);
  }

  const itensCart: ItemCartType[] = [
    {
      coffee: {
        id: createId(),
        imageSrc: '/images/coffees/expresso.png',
        tags: ['Tradicional'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90
      },
      quantity: 1
    },
    {
      coffee: {
        id: createId(),
        imageSrc: '/images/coffees/latte.png',
        tags: ['Tradicional', 'Com Leite'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90
      },
      quantity: 1
    },
  ];

  return (
    <CartContainer>
      <CompleteSection>
        <TitleSection>Complete seu pedido</TitleSection>

        <CompleteBox>
          <CompleteCard>
            <AddressHead>
              <MapPinLine size={22} weight="regular" />

              <div>
                <strong>Endereço de entrega</strong>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AddressHead>

            <AddressGrid>
              <AddressColumn size='6'>
                <InputText type="text" placeholder="CEP"/>
              </AddressColumn>
              <AddressColumn size='10'></AddressColumn>

              <AddressColumn size='16'>
                <InputText type="text" placeholder="Rua"/>
              </AddressColumn>

              <AddressColumn size='6'>
                <InputText type="text" placeholder="Número"/>
              </AddressColumn>
              <AddressColumn size='10'>
                <InputText type="text" placeholder="Complemento" required={false}/>
              </AddressColumn>

              <AddressColumn size='6'>
                <InputText type="text" placeholder="Bairro"/>
              </AddressColumn>
              <AddressColumn size='8'>
                <InputText type="text" placeholder="Cidade"/>
              </AddressColumn>
              <AddressColumn size='2'>
                <InputText type="text" placeholder="UF"/>
              </AddressColumn>
            </AddressGrid>
          </CompleteCard>

          <CompleteCard>
            <PaymentHead>
              <CurrencyDollar size={22} weight="regular" />

              <div>
                <strong>Pagamento</strong>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </PaymentHead>

            <PaymentFooter>
              <PaymentButton selected>
                <CreditCard size={16} weight="regular" />
                Cartão de crédito
              </PaymentButton>
              <PaymentButton>
                <Bank size={16} weight="regular" />
                Cartão de débito
              </PaymentButton>
              <PaymentButton>
                <Money size={16} weight="regular" />
                Dinheiro
              </PaymentButton>
            </PaymentFooter>
          </CompleteCard>
        </CompleteBox>
      </CompleteSection>

      <ItemSection>
        <TitleSection>Cafés selecionados</TitleSection>

        <ItemCard>
          {itensCart.map(item => {
            return (
              <ItemContent key={item.coffee.id}>
                <img src={item.coffee.imageSrc} alt={item.coffee.title} />

                <div>
                  <ItemTitle>{item.coffee.title}</ItemTitle>
                  <ItemActionBox>
                    <InputNumber
                      onChange={() => console.log('onChange')}
                      onMinusClick={() => console.log('onMinusClick')}
                      onPlusClick={() => console.log('onPlusClick')}
                      value={item.quantity}
                      inputHeight="M"
                    />
                    <RemoveButton>
                      <Trash size={16} weight="regular" />
                      Remover
                    </RemoveButton>
                  </ItemActionBox>
                </div>

                <ItemPriceBox>
                  <strong>R$ {item.coffee.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                </ItemPriceBox>
              </ItemContent>
            )
          })}

          <PricesContent>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </PricesContent>

          <ConfirmButton>Confirmar pedido</ConfirmButton>
        </ItemCard>
      </ItemSection>
    </CartContainer>
  )
}