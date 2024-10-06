import { designSystem } from "@constants";
import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IFieldProps {
    label: string;
    hasError?: boolean;
    errorMessage?: string;
    render: (hasError?: boolean) => ReactNode;
}

// This component makes use of the reder prop pattern to improve
// reuse & decouple it from specific inputs
export function Field({ label, errorMessage, hasError, render }: IFieldProps) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            {render(hasError)}
            {hasError && errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        marginBottom: 6, // TODO: Define spacing system
    },
    errorMessage: {
        marginTop: 6, // TODO: Define spacing system
        color: designSystem.colors.danger,
        fontWeight: "bold",
        fontSize: 12,
    },
});
