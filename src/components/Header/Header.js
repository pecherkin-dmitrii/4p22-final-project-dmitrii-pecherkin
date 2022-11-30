import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {ACCENT_COLOR, StyledContainer, BLACK_COLOR, WHITE_COLOR} from "../common/CommonStyles";
import {useSelector} from "react-redux";

const StyledHeader = styled.header`
  font-family: "Roboto", sans-serif;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: ${WHITE_COLOR};
  box-shadow: 0 4px 4px 0 #00000040;
  position: sticky;
  top: 0;
  margin: 0 auto;
  z-index: 9999;
`;

const StyledHeaderTitleSpan = styled.span`
  font-size: 2rem;
  color: ${props => props.colored ? ACCENT_COLOR : BLACK_COLOR};

  @media screen and (max-width: 699px) {
    display: none;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;

  @media screen and (max-width: 699px) {
    flex-direction: column;
    row-gap: 12px;
    align-items: flex-end;
  }
`;

const StyledHeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 699px) {
    justify-content: flex-end;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${BLACK_COLOR};
  transition: .2s color;

  &:hover, &.active {
    color: ${ACCENT_COLOR};
  }
`;

const StyledNavLinkWithCounter = styled(StyledNavLink)`
  position: relative;

  &::after {
    display: ${props => props.counter !== 0 ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    top: -5px;
    left: 66px;
    content: ${props => `"${props.counter}"`};
    font-size: 10px;
    background-color: ${ACCENT_COLOR};
    color: ${BLACK_COLOR};
  }
`;

function Header() {
    const cartValues = useSelector(state => Object.values(state.cart));
    let cartCounter = 0;

    if (cartValues.length !== 0) {
        cartCounter = cartValues.reduce((acc, value) => acc + value, 0)
    }

    return (
        <StyledHeader>
            <StyledContainer>
                <StyledHeaderContentWrapper>
                    <div>
                        <StyledHeaderTitleSpan colored>Супер</StyledHeaderTitleSpan>
                        <StyledHeaderTitleSpan>Магазин</StyledHeaderTitleSpan>
                    </div>
                    <StyledNavigation>
                        <StyledNavLink to="/">Каталог</StyledNavLink>
                        <StyledNavLink to="feedback">Обратная связь</StyledNavLink>
                        <StyledNavLinkWithCounter to="cart" counter={cartCounter}>Корзина</StyledNavLinkWithCounter>
                    </StyledNavigation>
                </StyledHeaderContentWrapper>
            </StyledContainer>
        </StyledHeader>
    );
}

export default Header;