import { designSystem } from "@constants";
import { forwardRef } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "react-native";

type TVariants = "primary" | "secondary" | "danger";

const VARIANT_STYLES: Record<TVariants, ViewStyle> = {
    primary: {
        backgroundColor: designSystem.colors.accent,
        borderColor: designSystem.colors.accentDarker,
    },
    secondary: {
        backgroundColor: designSystem.colors.blueishGray,
        borderColor: designSystem.colors.lightGray,
    },
    danger: {
        backgroundColor: designSystem.colors.danger,
        borderColor: designSystem.colors.danger,
    },
};

interface IButtonProps {
    children: string;
    variant?: TVariants;
    onPress?: () => void;
}

export const Button = forwardRef<View, IButtonProps>(
    (
        { children, variant = "primary", onPress = () => {} }: IButtonProps,
        ref
    ) => {
        return (
            <Pressable
                ref={ref}
                onPress={onPress}
                style={[styles.container, styles[variant]]}
            >
                <Text
                    style={[
                        styles.title,
                        variant === "danger"
                            ? { color: designSystem.colors.white }
                            : null,
                    ]}
                >
                    {children}
                </Text>
            </Pressable>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        textAlign: "center",
        borderRadius: 4,
        borderWidth: 1,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        color: designSystem.colors.blue,
    },
    ...VARIANT_STYLES,
});
