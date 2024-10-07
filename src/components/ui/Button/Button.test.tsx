import { render, fireEvent, screen } from "@testing-library/react-native";
import { Button } from "./Button";

describe("<Button />", () => {
    it("should render and display the correct text", () => {
        render(<Button>Click me</Button>);

        const buttonText = screen.getByText("Click me");
        expect(buttonText).toBeOnTheScreen();
    });

    it("should trigger onPress when pressed", () => {
        const mockOnPress = jest.fn();
        render(<Button onPress={mockOnPress}>Press me</Button>);

        const button = screen.getByText("Press me");
        fireEvent.press(button);

        expect(mockOnPress).toHaveBeenCalled();
    });
});
