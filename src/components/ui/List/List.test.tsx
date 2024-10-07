import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import { List } from "./List";

describe("<List.Container />", () => {
    it("should render children inside the container", () => {
        const { getByText } = render(
            <List.Container>
                <List.Item>
                    <Text>Item 1</Text>
                </List.Item>
            </List.Container>
        );

        expect(getByText("Item 1")).toBeTruthy();
    });

    it("should render multiple children with separators", () => {
        const { getByText, getAllByTestId } = render(
            <List.Container>
                <List.Item>
                    <Text>Item 1</Text>
                </List.Item>
                <List.Item>
                    <Text>Item 2</Text>
                </List.Item>
            </List.Container>
        );

        expect(getByText("Item 1")).toBeTruthy();
        expect(getByText("Item 2")).toBeTruthy();

        const separators = getAllByTestId("separator");
        expect(separators.length).toBe(1);
    });

    it("should not render a separator when there is only one child", () => {
        const { queryAllByTestId } = render(
            <List.Container>
                <List.Item>
                    <Text>Item 1</Text>
                </List.Item>
            </List.Container>
        );

        const separators = queryAllByTestId("separator");
        expect(separators.length).toBe(0);
    });
});

describe("<List.Item />", () => {
    it("should render children inside the item", () => {
        const { getByText } = render(
            <List.Item>
                <Text>Item 1</Text>
            </List.Item>
        );
        expect(getByText("Item 1")).toBeTruthy();
    });
});
