import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../colors";
import Skeleton from "../skeleton/skeleton";
import { Product } from "./product";

export const Products = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <ProductsStyle>
      <ul>
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((element) => {
            return (
              <Skeleton
                key={element}
                width={217}
                height={285}
                borderRadius={8}
              />
            );
          })
        ) : (
          <ul>
            <Product/>
          </ul>
        )}
      </ul>
    </ProductsStyle>
  );
};

const ProductsStyle = styled.section`
  display: flex;
  padding: 100px;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    max-width: 1090px;
  }
  li {
    background-color: #ffffff;
    height: 285px;
    width: 217.56px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    margin: 22px;
    p {
      font-size: 10px;
      weight: 300;
      color: ${colors.tertiary};
      padding: 14px;
    }
    button {
      width: 100%;
      background-color: ${colors.secundary};
      color: #ffffff;
      border: none;
      cursor: pointer;
      border-bottom-left-radius: 8px;
      height: 31px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      border-bottom-right-radius: 8px;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }
    }
  }
`;
