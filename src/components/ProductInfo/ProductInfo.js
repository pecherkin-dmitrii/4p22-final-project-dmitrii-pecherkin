import {StyledContainer, WHITE_COLOR} from "../common/CommonStyles";
import styled from "styled-components";
import Button from "../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../store/cartSlice";
import rating from "../../assets/components/ProductInfo/rating.png";

const StyledProductContentWrapper = styled.section`
  background-color: ${WHITE_COLOR};
  box-shadow: 1px 1px 10px 4px #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  padding: 50px;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 699px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    padding: 30px;
  }
`;

const StyledProductImage = styled.img`
  width: 356px;
  height: 326px;
  object-fit: contain;

  @media screen and (max-width: 699px) {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    width: 150px;
    height: 150px;
  }
`;

const StyledProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 60px;

  @media screen and (max-width: 699px) {
    padding: 0;
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    padding: 0 30px;
  }
`;

const StyledProductDescriptionWrapper = styled.div`

`;

const StyledProductPricingDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const StyledProductTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 5px;

  @media screen and (max-width: 699px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    font-size: 1.5rem;
  }
`;

const StyledProductDescription = styled.p`
  margin-bottom: 15px;
  line-height: 21px;
  font-size: 0.9rem;
`;

const StyledProductPrice = styled.p`
  font-weight: bold;
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledRatingImg = styled.img`
  margin-right: 5px;
`;

function ProductInfo({item}) {
    const cart = useSelector(store => store.cart);

    const dispatch = useDispatch();

    const handleAddToCartClick = () => dispatch(addToCart(item.id));

    const handleRemoveFromCartClick = () => dispatch(removeFromCart(item.id));

    const getCartButton = () => {
        if (!cart.hasOwnProperty(item.id)) {
            return (<Button text="В корзину" onClick={handleAddToCartClick}/>)
        } else {
            return (<Button text="Удалить из корзины" onClick={handleRemoveFromCartClick}/>)
        }
    };

    if (Object.keys(item).length !== 0) {
        return (
            <StyledContainer>
                <StyledProductContentWrapper>
                    <StyledProductImage src={item.image} alt={item.title}/>
                    <StyledProductDetailsWrapper>
                        <StyledProductDescriptionWrapper>
                            <StyledProductTitle>{item.title}</StyledProductTitle>
                            <StyledProductDescription>{item.description}</StyledProductDescription>
                            <StyledRatingWrapper>
                                <StyledRatingImg src={rating} alt="Рейтинг"/>
                                <span>{item.rating.rate}/5 (Всего оценок: {item.rating.count})</span>
                            </StyledRatingWrapper>
                        </StyledProductDescriptionWrapper>
                        <StyledProductPricingDetailsWrapper>
                            <StyledProductPrice>{item.price}$</StyledProductPrice>
                            {getCartButton()}
                        </StyledProductPricingDetailsWrapper>
                    </StyledProductDetailsWrapper>
                </StyledProductContentWrapper>
            </StyledContainer>
        );
    } else {
        return (
            <StyledContainer>
                <StyledProductContentWrapper>
                    <h1>Загрузка...</h1>
                </StyledProductContentWrapper>
            </StyledContainer>
        );
    }
}

export default ProductInfo;