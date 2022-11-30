import styled from "styled-components";
import {
    ACCENT_COLOR,
    BLACK_COLOR,
    BUTTON_HOVER_ACCENT_COLOR,
    CURRENCY,
    GREY_COLOR,
    WHITE_COLOR
} from "../CommonStyles";
import {useDispatch, useSelector} from "react-redux";
import {decrementInCart, incrementInCart, removeFromCart} from "../../../store/cartSlice";
import deleteIcon from "../../../assets/components/CartItem/delete.svg"
import {Link} from "react-router-dom";

const StyledCartItemImage = styled.img`
  flex: 1 0 auto;
  height: 145px;
  width: 145px;
  object-fit: contain;
  border-radius: 5px;
  margin-right: 30px;

  @media screen and (max-width: 699px) {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
`;

const StyledCartItemContainer = styled.div`
  display: flex;

  @media screen and (max-width: 699px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledCartItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
`;

const StyledTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledTitleLink = styled(Link)`
  color: ${BLACK_COLOR};
`;

const StyledDescription = styled.div`
  color: ${GREY_COLOR};
`;

const StyledDeleteFromCartButton = styled.button`
  flex: 0 0 auto;
  background-image: url("${deleteIcon}");
  width: 15px;
  height: 19px;
  margin-left: 50px;
`;

const StyledDeleteFromCartButtonImg = styled.img`
  &:hover {
    filter: invert(64%) sepia(83%) saturate(1067%) hue-rotate(323deg) brightness(102%) contrast(101%);
  }
`;

const StyledPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledQuantityButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${ACCENT_COLOR};
  border-radius: 5px;
  width: 50px;
  padding: 5px 2px;
`;

const StyledQuantityButton = styled.button`
  background-color: ${WHITE_COLOR};
  color: ${ACCENT_COLOR};
  
  &:hover {
    color: ${BUTTON_HOVER_ACCENT_COLOR};
  }
`;

const StyledTotalPrice = styled.p`
  font-weight: bold;
`;

function CartItem(props) {
    const dispatch = useDispatch();

    const cart = useSelector(store => store.cart);

    const handleDecrementInCart = () => dispatch(decrementInCart(props.id));
    const handleIncrementInCart = () => dispatch(incrementInCart(props.id));
    const handleRemoveFromCart = () => dispatch(removeFromCart(props.id));

    return (
        <StyledCartItemContainer>
            <StyledCartItemImage src={props.imageSrc} alt={props.title}/>
            <StyledCartItemDetailsContainer>
                <StyledTitleRow>
                    <StyledTitleContainer>
                        <StyledTitleLink to={`/product/${props.id}`}>
                            <StyledTitle>{props.title}</StyledTitle>
                        </StyledTitleLink>
                        <StyledDescription>{props.description}</StyledDescription>
                    </StyledTitleContainer>
                    <StyledDeleteFromCartButton title={"Удалить из корзины"} onClick={handleRemoveFromCart}>
                        <StyledDeleteFromCartButtonImg src={deleteIcon} alt={"Удалить из корзины"}></StyledDeleteFromCartButtonImg>
                        </StyledDeleteFromCartButton>
                </StyledTitleRow>
                <StyledPriceRow>
                    <StyledQuantityButtonsContainer>
                        <StyledQuantityButton onClick={handleDecrementInCart}>-</StyledQuantityButton>
                        <p>{cart[props.id]}</p>
                        <StyledQuantityButton onClick={handleIncrementInCart}>+</StyledQuantityButton>
                    </StyledQuantityButtonsContainer>
                    <StyledTotalPrice>{(props.price * cart[props.id]).toFixed(2) + CURRENCY}</StyledTotalPrice>
                </StyledPriceRow>
            </StyledCartItemDetailsContainer>
        </StyledCartItemContainer>
    );
}

export default CartItem;