import { ButtonCart } from "./buttonCart/buttonCart";
import styled from "styled-components";
import colors from "../../colors";

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </Logo>
      <ButtonCart />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.section`
  background-color: ${colors.secundary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
`;

const Logo = styled.section`
  color: #ffffff;
  height: 49px;
  display: flex;
  h1 {
    font-size: 45px;
    font-weight: 600;
  }
  span {
    font-size: 20px;
    margin-left:10px;
    font-weight: 300;
    display: flex;
    align-items: flex-end;
  }
`;