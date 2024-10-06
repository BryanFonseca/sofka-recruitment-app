import { cleanup, render, screen, within } from "@testing-library/react-native";
import { InputField } from "./InputField";

beforeEach(cleanup);

describe("<Input />", () => {
    it("should render", () => {
        render(<InputField label="ID" value="123" />);
        screen.getByTestId("input");
    });

    it("should present error state & error message", () => {
        const errorMessage = "Some Error Message";
        const { queryByText } = render(
            <InputField label="Name" hasError errorMessage={errorMessage} />
        );
        const errorMessageElement = queryByText(errorMessage);
        expect(errorMessageElement).toBeTruthy();
    });
});
