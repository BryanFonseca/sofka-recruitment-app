import { useProduct } from "@hooks";
import { Button } from "@ui";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";

function ProductDetailPage() {
    const { id } = useLocalSearchParams();
    const { product } = useProduct({ id: typeof id === "string" ? id : id[0] });

    return (
        <View style={{ height: "97%", justifyContent: "space-between" }}>
            <View>
                <View>
                    <Text
                        style={{ fontFamily: "robotoSlab_500", fontSize: 24 }}
                    >
                        ID: {id}
                    </Text>
                    <Text style={{ fontSize: 12 }}>Información extra</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.keyValuePair}>
                        <Text style={styles.keyText}>Nombre</Text>
                        <Text style={styles.valueText}>{product?.name}</Text>
                    </View>
                    <View style={styles.keyValuePair}>
                        <Text style={styles.keyText}>Descripción</Text>
                        <Text style={styles.valueText}>
                            {product?.description}
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.keyText}>Logo</Text>
                        <Image
                            style={{
                                width: "60%",
                                height: 100,
                                alignSelf: "center",
                                objectFit: "contain",
                                marginVertical: 8,
                            }}
                            source={{
                                uri: "https://placehold.it/800x400",
                            }}
                        />
                    </View>

                    <View style={styles.keyValuePair}>
                        <Text style={styles.keyText}>Fecha liberación</Text>
                        <Text style={styles.valueText}>
                            {product?.releaseDate}
                        </Text>
                    </View>
                    <View style={styles.keyValuePair}>
                        <Text style={styles.keyText}>Fecha revisión</Text>
                        <Text style={styles.valueText}>
                            {product?.revisionDate}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Button variant="secondary">Editar</Button>
                <Button variant="danger">Eliminar</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        gap: 16,
        marginTop: "20%",
    },
    keyValuePair: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    keyText: {
        fontWeight: "300",
    },
    valueText: {
        fontWeight: "500",
    },
});

export default ProductDetailPage;
