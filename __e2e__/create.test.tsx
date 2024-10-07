import {
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react-native";
import CreatePage from "../app/create";
import { useRouter } from "expo-router";
import { useCreateProduct } from "@hooks";

jest.mock("@api", () => ({
    exists: jest.fn(),
}));
jest.mock("@hooks", () => ({
    useCreateProduct: jest.fn(),
}));
jest.mock("expo-router", () => ({
    useRouter: jest.fn(),
}));

describe("CreatePage", () => {
    const mockCreateProduct = jest.fn();
    const mockRouterReplace = jest.fn();

    beforeEach(() => {
        (useCreateProduct as jest.Mock).mockReturnValue({
            createProduct: mockCreateProduct,
        });
        (useRouter as jest.Mock).mockReturnValue({
            replace: mockRouterReplace,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders the form with all fields and buttons", () => {
        render(<CreatePage />);
        expect(screen.getByText("Formulario de Registro")).toBeOnTheScreen();
        expect(screen.getByTestId("product-form")).toBeOnTheScreen();
        expect(screen.getByText("Enviar")).toBeOnTheScreen();
        expect(screen.getByText("Reiniciar")).toBeOnTheScreen();
    });

    it("submits the form and creates a product", async () => {
        render(<CreatePage />);

        fireEvent.changeText(screen.getByPlaceholderText("ID"), "uno");
        fireEvent.changeText(
            screen.getByPlaceholderText("Producto 1"),
            "Producto 1"
        );
        fireEvent.changeText(
            screen.getByPlaceholderText("Producto usado para..."),
            "Some description"
        );
        fireEvent.changeText(
            screen.getByPlaceholderText("Logo URL"),
            "Some URL"
        );
        fireEvent.changeText(
            screen.getByPlaceholderText("Logo URL"),
            "Some URL"
        );

        // kinda unsafe ngl
        const [releaseDate, revisionDate] =
            screen.getAllByPlaceholderText("DD/MM/YYYY");
        fireEvent.changeText(releaseDate, "18/05/2026");
        fireEvent.changeText(revisionDate, "18/05/2027");

        // Submit the form
        fireEvent.press(screen.getByText("Enviar"));

        await waitFor(() => {
            expect(mockCreateProduct).toHaveBeenCalledWith({
                description: "Some description",
                id: "uno",
                logo: "Some URL",
                name: "Producto 1",
                releaseDate: "18/05/2026",
                revisionDate: "18/05/2027",
            });
        });
    });
});
