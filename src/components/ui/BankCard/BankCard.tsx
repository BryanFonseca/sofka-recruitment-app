import { designSystem } from "@constants";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export function BankCard() {
    return (
        <View
            style={{
                height: 110,
                width: 180,
                backgroundColor: designSystem.colors.accent,
                borderRadius: 5,
                marginVertical: 5,
                alignSelf: "center",
                overflow: "hidden",
            }}
        >
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    transform: "rotate(-28deg)",
                    transformOrigin: "top right",
                    position: "absolute",
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={["#eea005", "#ffdd04"]}
                    style={{
                        width: "115%",
                        height: "100%",
                        opacity: 0.2,
                        position: "absolute",
                        transform: "translateX(-30px)",
                    }}
                ></LinearGradient>
            </View>
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    transformOrigin: "top left",
                    position: "absolute",
                    transform: "translateX(-30px)",
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={["#eea005", "#ffdd04"]}
                    style={{
                        width: "120%",
                        height: "150%",
                        opacity: 0.2,
                        position: "absolute",
                        transform: "rotate(28deg)",
                    }}
                ></LinearGradient>
            </View>
            <View
                style={{
                    height: 22,
                    width: 36,
                    backgroundColor: "white",
                    position: "absolute",
                    top: "50%",
                    left: 20,
                    transform: "translateY(-10px)",
                    borderRadius: 2,
                }}
            ></View>
        </View>
    );
}
