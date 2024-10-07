import Page from "../app/index";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { useProductItems } from "../src/hooks/useProductItems";

jest.mock("../src/hooks/useProductItems");

describe("F1", () => {
    beforeEach(() => {
        (useProductItems as jest.Mock).mockReturnValue({
            productItems: [
                { id: 1, name: "Producto 1" },
                { id: 2, name: "Producto 2" },
            ],
        });
    });

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
    it.todo("should filter products when searching");
});
