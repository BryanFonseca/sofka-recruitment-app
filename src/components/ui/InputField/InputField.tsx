import { designSystem } from "@constants";
import { ReactNode } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import { Field } from "../Field/Field";

interface IInputProps extends TextInputProps {
    label: string;
    hasError?: boolean;
    errorMessage?: string;
}

export function InputField({
    label,
    hasError,
    errorMessage,
    ...rest
}: IInputProps) {
    return (
        <Field
            label={label}
            render={(hasError) => (
                <TextInput
                    testID="input"
                    style={[
                        styles.container,
                        hasError ? styles.errorBorder : undefined,
                    ]}
                    {...rest}
                />
            )}
            hasError={hasError}
            errorMessage={errorMessage}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: designSystem.colors.darkGray,
        borderRadius: 3,
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    errorMessage: {
        color: designSystem.colors.danger,
    },
    errorBorder: {
        borderColor: designSystem.colors.danger,
    },
});
