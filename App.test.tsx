import { render, screen } from "@testing-library/react-native";
import App from "./App";

describe("<App />", () => {
    it("should be true", () => {
        render(<App />);
        screen.getByText("Open up App.tsx to start working on your app!");
    });
});
