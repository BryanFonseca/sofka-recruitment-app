import { render, fireEvent, screen } from "@testing-library/react-native";
import { ConfirmationBottomSheet } from "./ConfirmationBottomSheet";

describe("<ConfirmationBottomSheet />", () => {
    it("should not be visible when isVisible is false", () => {
        const confirmationMessage = "¿Estás seguro de eliminar?";
        render(
            <ConfirmationBottomSheet
                confirmationMessage={confirmationMessage}
                isVisible={false}
                onConfirm={jest.fn()}
                onReject={jest.fn()}
            />
        );

        const modal = screen.queryByText(confirmationMessage);
        expect(modal).toBeNull();
    });

    it("should be visible when isVisible is true", () => {
        const confirmationMessage = "¿Estás seguro de eliminar?";
        render(
            <ConfirmationBottomSheet
                confirmationMessage={confirmationMessage}
                isVisible={true}
                onConfirm={jest.fn()}
                onReject={jest.fn()}
            />
        );

        const modalText = screen.getByText(confirmationMessage);
        expect(modalText).toBeOnTheScreen();
    });

    it("should call onReject when the close button is pressed", () => {
        const confirmationMessage = "¿Estás seguro de eliminar?";
        const mockOnReject = jest.fn();

        render(
            <ConfirmationBottomSheet
                confirmationMessage={confirmationMessage}
                isVisible={true}
                onConfirm={jest.fn()}
                onReject={mockOnReject}
            />
        );

        const closeButton = screen.getByTestId("close-button");
        fireEvent.press(closeButton);

        expect(mockOnReject).toHaveBeenCalled();
    });

    it("should call onReject when the overlay is pressed", () => {
        const confirmationMessage = "¿Estás seguro de eliminar?";
        const mockOnReject = jest.fn();

        render(
            <ConfirmationBottomSheet
                confirmationMessage={confirmationMessage}
                isVisible={true}
                onConfirm={jest.fn()}
                onReject={mockOnReject}
            />
        );

        const overlay = screen.getByTestId("overlay");
        fireEvent.press(overlay);

        expect(mockOnReject).toHaveBeenCalled();
    });

    it('should call onConfirm when the "Confirmar" button is pressed', () => {
        const confirmationMessage = "¿Estás seguro de eliminar?";
        const mockOnConfirm = jest.fn();

        render(
            <ConfirmationBottomSheet
                confirmationMessage={confirmationMessage}
                isVisible={true}
                onConfirm={mockOnConfirm}
                onReject={jest.fn()}
            />
        );

        const confirmButton = screen.getByText("Confirmar");
        fireEvent.press(confirmButton);

        expect(mockOnConfirm).toHaveBeenCalled();
    });

    it('should call onReject when the "Cancelar" button is pressed', () => {
        const confirmationMessage = "¿Estás seguro de eliminar?";
        const mockOnReject = jest.fn();

        render(
            <ConfirmationBottomSheet
                confirmationMessage={confirmationMessage}
                isVisible={true}
                onConfirm={jest.fn()}
                onReject={mockOnReject}
            />
        );

        const cancelButton = screen.getByText("Cancelar");
        fireEvent.press(cancelButton);

        expect(mockOnReject).toHaveBeenCalled();
    });
});
