import { designSystem } from "@constants";
import { StyleSheet, TextInput } from "react-native";

export function Searchbar() {
    return <TextInput placeholder="Search..." style={styles.container} />;
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: designSystem.colors.lightGray,
        borderRadius: 3,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});
