import { Header } from "./components/header/header";
import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import { Products } from "./components/products/main/products";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <section style={{ position: "relative" }}>
      <GlobalStyle />
      <Header />
      <Products />
      <Footer />
    </section>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    box-sizing:0;
    padding:0;
    font-family: 'Montserrat', sans-serif;
    a{
      text-decoration: none;
    }
    li{
      list-style: none;
    }
    body{
      background-color:${colors.primary}
    }
  }
 
`;
export default App;
