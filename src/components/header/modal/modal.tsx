import { ButtonCart } from "../buttonCart/buttonCart";
import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../colors";
import "./animation/animation.sass";
import { ProductsInCart } from "./productsInCart/productsInCart";
import { useSelector } from "react-redux";
import { useProducts } from "../../store/sliceProducts";

export const ModalCart = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const products = useSelector(useProducts);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const sumOfPrices = products.reduce(function (accumulator, price): number {
      const priceInt = parseInt(price.price) * price.quantity;
      return accumulator + priceInt;
    }, 0);
    setTotalPrice(sumOfPrices);
  }, [products]);

  function handleClick(): void {!showModal ? setShowModal(true) : setShowModal(false);}

  return (
    <>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        <ButtonCart />
      </Button>
      {showModal && (
        <CartStyle className="animation">
          <TitleAndItens>
            <div>
              <h2>Carrinho de Compras</h2>
              <ProductsInCart />
            </div>
            <span
              onClick={() => {
                handleClick();
              }}
            >
              X
            </span>
          </TitleAndItens>
          <PriceAndButton>
            <div>
              <h2>Total:</h2>
              <h2>R${totalPrice}</h2>
            </div>
            <button>Finalizar Compra</button>
          </PriceAndButton>
        </CartStyle>
      )}
    </>
  );
};

const Button = styled.section`
  border-radius: 8px;
`;

const CartStyle = styled.section`
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  top: 0;
  height: 100%;
  width: 35%;
  background-color: ${colors.secundary};
`;

const TitleAndItens = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  span {
    width: 20px;
    height: 20px;
    text-align: center;
    padding: 3px;
    cursor: pointer;
    position: absolute;
    font-weight: 400;
    right: 0;
    margin-right: 20px;
    color: #ffffff;
    background-color: #000000;
    border-radius: 1100px;
  }
  h2 {
    font-weight: 700;
    font-size: 27px;
    width: 180px;
    color: #ffffff;
  }
  ul {
    margin-top: 30px;
  }
`;

const PriceAndButton = styled.div`
  width: 100%;
  button {
    font-size: 28px;
    font-weight: 700;
    width: 100%;
    padding: 10px 50px;
    border: none;
    color: #ffffff;
    background-color: #000000;
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: space-between;
    h2 {
      color: #ffffff;
      margin: 20px;
    }
  }
`;
