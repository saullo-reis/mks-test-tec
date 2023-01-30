import styled from "styled-components";
import { useSelector } from "react-redux";
import { useProducts } from "../../../store/sliceProducts";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProducts } from "../../../store/sliceProducts";

export const ProductsInCart = () => {
  const products = useSelector(useProducts);
  const [quantityProducts, setQuantity] = useState(1);
  const dispatch = useDispatch();

  console.log(products);
  const handleClick = (action: string, element: object) => {
    if (action === "add") {
      console.log(element);
    } else if (action === "remove" && quantityProducts >= 1) {
      setQuantity(quantityProducts - 1);
    }
  };

  return (
    <List>
      {products.map((element, index) => {
        return (
          <li key={index}>
            <img src={element.photo} alt="product-name"></img>
            <h3>{element.name}</h3>
            <BoxButton>
              <p>Qtd</p>
              <Button>
                <button
                  onClick={() => {
                    handleClick("remove", element);
                  }}
                >
                  -
                </button>
                <p>{element.quantity}</p>
                <button
                  onClick={() => {
                    handleClick("add", element);
                  }}
                >
                  +
                </button>
              </Button>
            </BoxButton>
            <h2>R${element.price}</h2>
            <RemoveButton
              onClick={() =>
                dispatch(
                  removeProducts(index)
                )
              }
            >
              X
            </RemoveButton>
          </li>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    position: relative;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    color: #000;
    background-color: #ffffff;
    justify-content: space-between;
    width: 100%;
    height: 95px;
    img {
      width: 60px;
      height: 57px;
    }
    h3 {
      font-weight: 400;
      font-size: 15px;
      color: #2c2c2c;
      max-width: 60px;
    }
    h2 {
      font-size: 14px;
      font-weight: 700;
      color: #000;
      width: 30%;
    }
  }
`;

const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  text-align: center;
  padding: 3px;
  cursor: pointer;
  position: absolute;
  font-weight: 400;
  top: -5px;
  right: -30px;
  margin-right: 20px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 1100px;
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 10px;
  }
`;

const Button = styled.h1`
  display: flex;
  align-items: center;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  width: 60px;
  height: 20px;
  justify-content: space-evenly;
  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
    padding: 1px 6px;
  }
  p {
    border-left: 0.2px solid #bfbfbf;
    border-right: 0.2px solid #bfbfbf;
    padding: 0 6px;
  }
`;
