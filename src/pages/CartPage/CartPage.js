import {StyledContainer, CURRENCY, WHITE_COLOR} from "../../components/common/CommonStyles";
import styled from "styled-components";
import {useSelector} from "react-redux";
import Button from "../../components/common/Button/Button";
import CartItem from "../../components/common/CartItem/CartItem";

const StyledCartElementsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 699px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledProductsList = styled.div`
  flex: 2 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  background-color: ${WHITE_COLOR};
  box-shadow: 1px 1px 10px 4px #ccc;
  border-radius: 5px;
  padding: 40px;

  @media screen and (max-width: 699px) {
    padding: 20px;
  }
`;

const StyledCheckout = styled.div`
  flex: 1 0 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${WHITE_COLOR};
  box-shadow: 1px 1px 10px 4px #ccc;
  border-radius: 5px;
  padding: 20px;

  @media screen and (max-width: 699px) {
    flex: 1 0 auto;
    width: 100%;
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    flex: 1 0 auto;
    width: 100%;
  }
`;

const StyledCheckoutText = styled.span`
  margin-bottom: 15px;

  &::after {
    content: ${props => `"${props.sum.toFixed(2)}${CURRENCY}"`};
    font-weight: bold;
  }
`;

function CartPage() {
    const cart = useSelector(store => store.cart);
    const products = useSelector(store => store.products);

    const productsCount = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);

    const cartProducts = products.filter(product => Object.keys(cart).includes(`${product.id}`));

    const productsSum = cartProducts.reduce((acc, product) => acc + product.price * cart[product.id], 0);

    const handleCheckout = () => {
        const checkoutString = cartProducts.reduce((acc, product) => {
            return acc + product.title + " - " + cart[product.id] + " шт." + "\n"
        }, "");
        console.log(checkoutString);
    }

    return (
        <StyledContainer>
            <StyledCartElementsWrapper>
                <StyledProductsList>
                    {
                        productsCount === 0 && (<p>В корзине нет товаров</p>)
                    }
                    {
                        productsCount !== 0 && (
                            cartProducts.map(product => {
                                return <CartItem key={product.id}
                                                 id={product.id}
                                                 description={product.description}
                                                 imageSrc={product.image}
                                                 price={product.price}
                                                 title={product.title}
                                />
                            })
                        )
                    }
                </StyledProductsList>
                {
                    productsCount !== 0 && (
                        <StyledCheckout>
                            <StyledCheckoutText sum={productsSum}>Всего товаров {productsCount}. На сумму: </StyledCheckoutText>
                            <Button text={"Оформить заказ"} onClick={handleCheckout}></Button>
                        </StyledCheckout>
                    )
                }
            </StyledCartElementsWrapper>
        </StyledContainer>
    );
}

export default CartPage;