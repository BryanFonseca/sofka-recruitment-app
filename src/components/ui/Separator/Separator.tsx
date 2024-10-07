import { designSystem } from "@constants";
import { View } from "react-native";

export function Separator() {
    return (
        <View
            testID="separator"
            style={{
                height: 1,
                backgroundColor: designSystem.colors.lightGray,
                // Maybe ignore these two
                width: "98%",
                alignSelf: "center",
            }}
        ></View>
    );
}
