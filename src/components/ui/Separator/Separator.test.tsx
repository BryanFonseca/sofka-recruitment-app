import { render, screen } from "@testing-library/react-native";
import { Separator } from "./Separator";

describe("<Separator />", () => {
    it("should render", () => {
        render(<Separator />);
        const separator = screen.getByTestId("separator");
        expect(separator).toBeOnTheScreen();
    });
});
