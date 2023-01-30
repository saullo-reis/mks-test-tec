import { BsFillCartFill } from "react-icons/bs";
import styled from "styled-components";
import {FunctionComponent} from 'react'
import { useSelector } from "react-redux";
import { useProducts } from "../../store/sliceProducts";

export const ButtonCart: FunctionComponent = () => {
  const products = useSelector(useProducts);

  return (
    <ButtonCartStyle>
      <BsFillCartFill />
      <span>{products.length}</span>
    </ButtonCartStyle>
  );
};

const ButtonCartStyle = styled.div`
    background-color: #ffffff;
    width:90px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 8px;
    cursor: pointer;
    span{
        font-weight: 700;
        margin-left: 15px;
    }
`
