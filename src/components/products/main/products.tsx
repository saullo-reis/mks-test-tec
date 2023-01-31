import { useState, useEffect } from "react";
import { getProducts } from "../../get/get";
import styled from "styled-components";
import { RiShoppingBag3Line } from "react-icons/ri";
import colors from "../../../colors";
import { useDispatch } from "react-redux";
import { addProducts } from "../../store/sliceProducts";
import Skeleton from "../skeleton/skeleton";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
  map: any;
}

export const Products = () => {
  const [products, setProducts] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts();
      setProducts(response.products);
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();

  return (
    <ProductsStyle>
      <ul>
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((element) => {
            return <Skeleton key={element} width={217} height={285} borderRadius={8} />;
          })
        ) : (
          <ul>
            {products !== undefined &&
              products.map((element: any, index: number) => {
                return (
                  <li key={index}>
                    <ProductImage
                      style={{ backgroundImage: `url(${element.photo})` }}
                    ></ProductImage>
                    <NameAndPrice>
                      <h2>{element.name}</h2>
                      <span>R${element.price}</span>
                    </NameAndPrice>
                    <p>Redesigned from scratch and completely revised.</p>
                    <button
                      onClick={() =>
                        dispatch(
                          addProducts({
                            name: element.name,
                            price: element.price,
                            quantity: 1,
                            photo: element.photo,
                          })
                        )
                      }
                    >
                      <span>
                        <RiShoppingBag3Line />
                      </span>
                      <h3>Comprar</h3>
                    </button>
                  </li>
                );
              })}
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

const ProductImage = styled.div`
  width: 140px;
  height: 60%;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const NameAndPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  h2 {
    width: 100px;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.tertiary};
  }
  span {
    background-color: ${colors.tertiary};
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    padding: 4px;
    border-radius: 8px;
  }
`;
