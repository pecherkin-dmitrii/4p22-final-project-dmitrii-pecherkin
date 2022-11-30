import Button from "../Button/Button"
import styled from "styled-components";
import {Link} from "react-router-dom";
import {WHITE_COLOR, BLACK_COLOR} from "../CommonStyles";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../../store/cartSlice";

const DESCRIPTION_SYMBOLS_TO_SHOW = 150;

const StyledCard = styled.section`
  width: 285px;
  height: 360px;
  padding: 17px;
  background-color: ${WHITE_COLOR};
  box-shadow: 1px 1px 10px 4px #ccc;
  border-radius: 5px;
  overflow: hidden;
  color: ${BLACK_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const StyledCardLink = styled(Link)`
  text-decoration: none;
  color: ${BLACK_COLOR};
`;

const StyledProductTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledProductDescription = styled.p`
  font-size: 0.9rem;
`;

const StyledProductDetailsWrapper = styled.div`
  overflow: hidden;
`;

const StyledProductPricingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledProductPrice = styled.span`
  font-weight: bold;
`;

function CatalogCard(props) {
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handleAddToCartClick = () => dispatch(addToCart(props.id));

    const handleRemoveFromCartClick = () => dispatch(removeFromCart(props.id));

    const getCartButton = () => {
        if (!cart.hasOwnProperty(props.id)) {
            return (<Button text="В корзину" onClick={handleAddToCartClick}/>)
        } else {
            return (<Button text="Удалить из корзины" onClick={handleRemoveFromCartClick}/>)
        }
    };

    return (
        <StyledCard>
            <StyledProductDetailsWrapper>
                <StyledCardLink to={`product/${props.id}`}>
                    <StyledCardImg src={props.imageSrc} alt={props.title}/>
                    <StyledProductTitle>{props.title}</StyledProductTitle>
                    <StyledProductDescription>{props.description.substring(0, DESCRIPTION_SYMBOLS_TO_SHOW) + "..."}</StyledProductDescription>
                </StyledCardLink>
            </StyledProductDetailsWrapper>
            <StyledProductPricingWrapper>
                <StyledProductPrice>{props.price}</StyledProductPrice>
                {getCartButton()}
            </StyledProductPricingWrapper>
        </StyledCard>
    );
}

export default CatalogCard;