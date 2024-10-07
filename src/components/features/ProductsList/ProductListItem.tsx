import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { designSystem } from "@constants";
import { Link } from "expo-router";

interface IProductListItemProps {
    id: string;
    name: string;
}

export function ProductListItem({ id, name }: IProductListItemProps) {
    return (
        <Link
            href={{
                pathname: "/details/[id]",
                params: { id },
            }}
            asChild
        >
            <Pressable style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.idText}>ID: {id}</Text>
                </View>
                <AntDesign
                    name="right"
                    size={16}
                    color={designSystem.colors.darkGray}
                />
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        gap: 4,
    },
    nameText: {
        fontWeight: "500",
    },
    idText: {
        fontSize: 12,
    },
});
