import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { List } from "./List";

describe("<List.Container />", () => {
    it("should render children inside the container", () => {
        render(
            <List.Container>
                <List.Item>
                    <Text>Item 1</Text>
                </List.Item>
            </List.Container>
        );
        const itemElement = screen.getByText("Item 1");
        expect(itemElement).toBeOnTheScreen();
    });

    it("should render multiple children with separators", () => {
        render(
            <List.Container>
                <List.Item>
                    <Text>Item 1</Text>
                </List.Item>
                <List.Item>
                    <Text>Item 2</Text>
                </List.Item>
            </List.Container>
        );

        const item1Element = screen.getByText("Item 1");
        const item2Element = screen.getByText("Item 2");

        expect(item1Element).toBeOnTheScreen();
        expect(item2Element).toBeOnTheScreen();

        const separators = screen.getAllByTestId("separator");
        expect(separators.length).toBe(1);
    });

    it("should not render a separator when there is only one child", () => {
        render(
            <List.Container>
                <List.Item>
                    <Text>Item 1</Text>
                </List.Item>
            </List.Container>
        );
        const separators = screen.queryAllByTestId("separator");
        expect(separators.length).toBe(0);
    });
});

describe("<List.Item />", () => {
    it("should render children inside the item", () => {
        render(
            <List.Item>
                <Text>Item 1</Text>
            </List.Item>
        );
        const item = screen.getByText("Item 1");
        expect(item).toBeOnTheScreen();
    });
});
