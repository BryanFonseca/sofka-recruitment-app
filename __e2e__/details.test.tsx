import { render, screen, waitFor } from "@testing-library/react-native";
import ProductDetailPage from "../app/details/[id]";
import { useProduct } from "@hooks";
import { useLocalSearchParams } from "expo-router";

jest.mock("@hooks", () => ({
    useProduct: jest.fn(),
}));
jest.mock("expo-router", () => ({
    useLocalSearchParams: jest.fn(),
    Link: "",
}));

describe("ProductDetailPage", () => {
    const mockProductData = {
        name: "Producto 1",
        description: "Alguna descripción",
        releaseDate: "2023-09-25",
        revisionDate: "2024-09-25",
    };

    beforeEach(() => {
        (useProduct as jest.Mock).mockReturnValue({ product: mockProductData });
        (useLocalSearchParams as jest.Mock).mockReturnValue({ id: "1" });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should display product details", async () => {
        render(<ProductDetailPage />);

        await waitFor(() => {
            expect(screen.getByText("ID: 1")).toBeOnTheScreen();
            expect(screen.getByText("Nombre")).toBeOnTheScreen();
            expect(screen.getByText("Producto 1")).toBeOnTheScreen();
            expect(screen.getByText("Descripción")).toBeOnTheScreen();
            expect(screen.getByText("Alguna descripción")).toBeOnTheScreen();
            expect(screen.getByText("Fecha liberación")).toBeOnTheScreen();
            expect(screen.getByText("2023-09-25")).toBeOnTheScreen();
            expect(screen.getByText("Fecha revisión")).toBeOnTheScreen();
            expect(screen.getByText("2024-09-25")).toBeOnTheScreen();
        });
    });

    it("should display edit and delete buttons", () => {
        render(<ProductDetailPage />);

        expect(screen.getByText("Editar")).toBeOnTheScreen();
        expect(screen.getByText("Eliminar")).toBeOnTheScreen();
    });

    it("should handle missing product data gracefully", async () => {
        (useProduct as jest.Mock).mockReturnValue({ product: null });

        render(<ProductDetailPage />);

        await waitFor(() => {
            expect(screen.getByText("ID: 1")).toBeOnTheScreen();
        });
    });
});
