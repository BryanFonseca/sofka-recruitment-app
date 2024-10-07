import Page from "../app/index";
import {
    render,
    screen,
    fireEvent,
    waitFor,
} from "@testing-library/react-native";
import { useProductItems } from "../src/hooks/useProductItems";

jest.mock("../src/hooks/useProductItems");

const PRODUCTS_MOCK = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
];

beforeEach(() => {
    (useProductItems as jest.Mock).mockReturnValue({
        productItems: PRODUCTS_MOCK,
    });
});

describe("F1", () => {
    it("should display a list of products", async () => {
        render(<Page />);

        const product1 = screen.getByText("Producto 1");
        const product2 = screen.getByText("Producto 2");

        expect(product1).toBeOnTheScreen();
        expect(product2).toBeOnTheScreen();
    });

    it("should display a search bar", () => {
        render(<Page />);

        const searchbar = screen.getByPlaceholderText("Search...");
        expect(searchbar).toBeOnTheScreen();
    });

    it("should have an add product button", () => {
        render(<Page />);

        const addButton = screen.getByText("Agregar");
        expect(addButton).toBeOnTheScreen();
    });

    it("should call the add product function when add button is pressed", () => {
        render(<Page />);

        const addButton = screen.getByText("Agregar");

        fireEvent.press(addButton);
    });
});

describe("F2", () => {
    it("should filter products when searching", async () => {
        render(<Page />);

        const searchbar = screen.getByPlaceholderText("Search...");
        fireEvent.changeText(searchbar, "Producto 1");

        await waitFor(() => {
            const product1 = screen.getByText("Producto 1");
            expect(product1).toBeOnTheScreen();
        });

        const product2 = screen.queryByText("Producto 2");
        expect(product2).toBeNull();
    });
});

describe("F3", () => {
    it("should show total number of products", async () => {
        render(<Page />);
        const countText = screen.getByText(`${PRODUCTS_MOCK.length} items`);
        expect(countText).toBeOnTheScreen();
    });
});
