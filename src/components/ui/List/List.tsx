import { designSystem } from "@constants";
import { Separator } from "../Separator/Separator";
import { ReactNode, Fragment } from "react";
import { View, StyleSheet } from "react-native";

interface IContainerProps {
    children: ReactNode;
}

function Container({ children }: IContainerProps) {
    if (!Array.isArray(children)) {
        return <View style={containerStyles.container}>{children}</View>;
    }

    return (
        <View style={containerStyles.container}>
            {children.map((child, index) => (
                <Fragment key={index}>
                    {index > 0 ? <Separator /> : null}
                    {child}
                </Fragment>
            ))}
        </View>
    );
}

const containerStyles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: designSystem.colors.lightGray,
        borderRadius: 6, // TODO: This should also be placed in the design system to keep a consistent UI
    },
});

function Item({ children }: { children: ReactNode }) {
    return <View style={itemStyles.container}>{children}</View>;
}

const itemStyles = StyleSheet.create({
    container: {
        padding: 12,
    },
});

export const List = {
    Container,
    Item,
};
