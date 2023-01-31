import{ render, screen, fireEvent} from '@testing-library/react'
import { Header } from './header'
import store from "../store/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom"

jest.mock('')

describe("Header", () => {
    test("testando a renderização", () => {
        render(
          <Provider store={store}>
              <Header />
          </Provider>
        );

        expect(screen.getByText("MKS")).toBeInTheDocument();
        expect(screen.getByText("Sistemas")).toBeInTheDocument();
        expect(screen.getByText("0")).toBeInTheDocument();
    })
    test("testando se ao clicar no botão abre", () => {
        render(
          <Provider store={store}>
              <Header />
          </Provider>
        );

        const btnCart = screen.getByText("0")

        fireEvent.click(btnCart);
    })
})