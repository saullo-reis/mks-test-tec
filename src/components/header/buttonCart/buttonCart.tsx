import { BsFillCartFill } from "react-icons/bs";
import styled from "styled-components";

export const ButtonCart = () => {
  return (
    <ButtonCartStyle>
      <BsFillCartFill />
      <span>0</span>
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
