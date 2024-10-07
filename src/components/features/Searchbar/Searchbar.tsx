import { designSystem } from "@constants";
import { StyleSheet, TextInput } from "react-native";

interface ISearchbarProps {
    value: string;
    onChange: (value: string) => void;
}

export function Searchbar({ value, onChange }: ISearchbarProps) {
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Search..."
            style={styles.container}
        />
    );
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
