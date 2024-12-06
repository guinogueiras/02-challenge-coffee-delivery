import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;

  > a {
    height: 40px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 12px;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${props => props.theme['purple-light']};

  ${mixins.fonts.textS}

  svg {
    color: ${props => props.theme['purple']};
  }

  span {
    color: ${props => props.theme['purple-dark']};
  }
`;

export const CartLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${props => props.theme['yellow-light']};

  svg {
    color: ${props => props.theme['yellow-dark']};
  }

`;