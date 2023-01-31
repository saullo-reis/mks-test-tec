import{ render, screen} from '@testing-library/react'
import { Header } from './header'
import store from "../store/store";
import { Provider } from "react-redux/es/exports";

describe("Header", () => {
    test("testando a renderização", () => {
        render(
          <Provider store={store}>
            <Header />
          </Provider>
        );

        expect(screen.getByText("MKS")).toBeInTheDocument();
    })
})