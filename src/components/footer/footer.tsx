import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterStyle>
      <p>MKS sistemas &copy; Todos os direitos reservados</p>
    </FooterStyle>
  );
};

const FooterStyle = styled.section`
  background-color: #eeeeee;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 12px;
  }
`;
