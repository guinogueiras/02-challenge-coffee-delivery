import { ShoppingCart } from "@phosphor-icons/react";
import { Coffee } from "../.."
import { Bottom, Container, CartButton, Currency, Description, Price, Tags, Title } from "./styles";
import { InputNumber } from "../InputNumber";

interface CardProps {
  key: string,
  coffee: Coffee
}
export function Card(props: CardProps) {
  const { coffee } = props;

  return (
    <Container key={coffee.id}>
      <img src={coffee.imageSrc} alt={coffee.title} />

      <Tags>
        {coffee.tags.map(tag => {
          return (<span key={tag}>{tag}</span>)
        })}
      </Tags>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>
      
      <Bottom>
        <div>
          <Currency>R$</Currency>
          <Price>{coffee.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Price>
        </div>
        <InputNumber />
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </Bottom>
    </Container>
  )
}