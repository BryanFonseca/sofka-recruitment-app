import { StyleSheet, Text, View } from "react-native";
import BillsIcon from "./BillsIcon";
import { designSystem } from "../../../../constants";

export function Imagotype() {
    return (
        <View style={styles.container}>
            <BillsIcon />
            <Text style={styles.headingText}>Banco</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8, // TODO: Define spacing system
    },
    headingText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: designSystem.colors.blue,
        fontFamily: "robotoSlab_600",
        fontSize: 16
    },
});
