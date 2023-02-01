import { useDispatch } from "react-redux";
import { addProducts } from "../../store/sliceProducts";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { getProducts } from "../../get/get";
import { ProductsType } from "./products-type";
import colors from "../../../colors";
import styled from "styled-components";

export const Product = () => {
  const [products, setProducts] = useState<ProductsType>();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts();
      setProducts(response.products);
    };
    fetchData();
  }, []);

  return (
    <>
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
    </>
  );
};

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
