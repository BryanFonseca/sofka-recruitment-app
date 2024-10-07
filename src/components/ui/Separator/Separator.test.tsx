import { render } from "@testing-library/react-native";
import { Separator } from "./Separator";

describe("<Separator />", () => {
    it("should render", () => {
        const { getByTestId } = render(<Separator />);
        expect(getByTestId("separator")).toBeTruthy();
    });
});
