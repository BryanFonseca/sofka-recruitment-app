import { Modal, Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { designSystem } from "@constants";
import { Separator } from "../Separator/Separator";
import { Button } from "../Button/Button";

interface IConfirmationBottomSheet {
    isVisible: boolean;
    onConfirm: () => void;
    onReject: () => void;
}

// Maybe this should be a confirmation dialog
export function ConfirmationBottomSheet({
    isVisible,
    onConfirm,
    onReject,
}: IConfirmationBottomSheet) {
    return (
        <Modal transparent animationType="fade" visible={isVisible}>
            <Pressable
                testID="overlay"
                style={styles.overlay}
                onPress={onReject}
            />
            <View style={styles.sheet}>
                <Pressable
                    testID="close-button"
                    style={styles.closeButton}
                    onPress={onReject}
                >
                    <Ionicons name="close" size={24} />
                </Pressable>

                <Separator />

                <Text style={styles.confirmationText}>
                    ¿Estás seguro de eliminar el producto 1?
                </Text>

                <Separator />

                <View style={{ padding: 16, gap: 8 }}>
                    <Button onPress={onConfirm}>Confirmar</Button>
                    <Button onPress={onReject} variant="secondary">
                        Cancelar
                    </Button>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    // Creo que el overlay no debería ser parte de esto y debería animarse de otra manera
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: designSystem.colors.black,
        opacity: 0.7,
    },
    sheet: {
        backgroundColor: designSystem.colors.white,
        minHeight: "33%",
        position: "absolute",
        bottom: 0,
        width: "99%",
        left: "0.5%",
        borderRadius: 10,
    },
    confirmationText: {
        padding: 16,
        paddingVertical: 24,
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16,
    },
    closeButton: {
        padding: 16,
        marginLeft: "auto",
    },
});
