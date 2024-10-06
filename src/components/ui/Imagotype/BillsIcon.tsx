import { StyleSheet, View } from "react-native";
import { designSystem } from "@constants";

// Returns a similar version of the icon shown in the spec doc
function BillsIcon() {
    return (
        <View style={{ height: 16, width: 18 }}>
            <View style={[styles.rectangle, styles.backgroundBill]}></View>
            <View style={styles.frontBill}>
                <View style={[styles.rectangle]}>
                    <View style={styles.circle}></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rectangle: {
        justifyContent: "center",
        alignItems: "center",
        height: 13,
        width: 17,
        borderRadius: 4,
        borderWidth: 2.6,
        borderColor: designSystem.colors.blue,
    },
    circle: {
        height: 5,
        width: 5.6,
        backgroundColor: designSystem.colors.blue,
        borderRadius: 2.5,
    },
    backgroundBill: {
        position: "absolute",
    },
    frontBill: {
        backgroundColor: designSystem.colors.white,
        position: "absolute",
        transform: "translateX(-6px) translateY(4px)",
        padding: 1,
    },
});

export default BillsIcon;
