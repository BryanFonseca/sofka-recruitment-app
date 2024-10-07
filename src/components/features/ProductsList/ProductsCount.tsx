import { designSystem } from "@constants";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export function ProductsCount({ count }: { count: number }) {
    return (
        <Text style={styles.text}>
            {count} {count === 1 ? "item" : "items"}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        alignSelf: "flex-end",
        color: designSystem.colors.blue,
    },
});
