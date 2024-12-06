import { CartLink, HeaderContainer, LocationContainer, NavContainer } from "./styles";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </Link>

      <NavContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>

        <CartLink to='/cart' >
          <ShoppingCart size={22} weight="fill" />
        </CartLink>
      </NavContainer>
    </HeaderContainer>
  )
}