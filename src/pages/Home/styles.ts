import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.main`
  /* flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

`;

const BaseBox = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  `;

export const BannerContainer = styled.div`
  position: relative;
  background-image: image-set('/images/banner-bg.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

export const BannerBox = styled(BaseBox)`
  display: flex;
  padding: 92px 20px;
  gap: 56px;

  > div {
    display: flex;
    gap: 66px;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const BannerHead = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${props => props.theme['base-title']};
  }
  
  > span {
    ${mixins.fonts.textL}
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const BannerInfo = styled.div`
  display: grid;
  grid-template-columns: 0.93fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
      color: ${props => props.theme['base-background']};

      &.yellow {
        background-color: ${props => props.theme['yellow']};
      }

      &.yellow-dark {
        background-color: ${props => props.theme['yellow-dark']};
      }

      &.purple {
        background-color: ${props => props.theme['purple']};
      }

      &.gray {
        background-color: ${props => props.theme['base-text']};
      }
    }
  }
`;


export const ContentContainer = styled.div`
`;

export const ContentBox = styled(BaseBox)`
  display: grid;
  grid-template-columns: 1fr;
  padding: 32px 20px;
  gap: 54px;
`;

export const ContentTitle = styled.div`
  display: flex;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${props => props.theme['base-subtitle']};
  }
`;
export const CoffeeBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-row-gap: 40px;
  grid-column-gap: 32px; */
  gap: 40px 32px;

  > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: calc(25% - 32px);
  }
`;

