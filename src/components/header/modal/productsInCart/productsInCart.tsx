import styled from "styled-components"

export const ProductsInCart = () => {
    return (
      <List>
        <li>
          <img></img>
          <p>nome</p>
          <div>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <h2>preço</h2>
        </li>
      </List>
    );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    margin: 20px 0;
    display: flex;
    align-items: center;
    color: #000;
    background-color: #ffffff;
    justify-content: space-between;
    width: 100%;
    height: 95px;
    p {
      font-size: 13px;
      font-weigth: 400;
    }
    h2 {
      font-size: 14px;
      font-weigth: 700;
      color: #000;
    }
    div {
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
        cursor:pointer;
        padding:2px 6px;
      }
      p {
        border-left: 0.2px solid #bfbfbf;
        border-right: 0.2px solid #bfbfbf;
        padding: 0 6px;
      }
    }
  }
`;
