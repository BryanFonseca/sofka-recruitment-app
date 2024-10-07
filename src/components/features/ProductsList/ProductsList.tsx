import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { List, Separator } from "@ui";
import { designSystem } from "@constants";
import { ProductItem } from "Models/ProductItem";
import { ProductListItem } from "./ProductListItem";

interface IProductsListProps {
    products: ProductItem[];
}

export function ProductsList({ products }: IProductsListProps) {
    return (
        <View style={styles.container}>
            <FlatList
                ItemSeparatorComponent={() => <Separator />}
                style={styles.flatList}
                data={products}
                renderItem={({ item }) => (
                    <List.Item>
                        <ProductListItem name={item.name} id={item.id} />
                    </List.Item>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 0,
        flexGrow: 1,
    },
    flatList: {
        flexGrow: 0,

        borderWidth: 1,
        borderColor: designSystem.colors.lightGray,
        borderRadius: 6, // TODO: This should also be placed in the design system to keep a consistent UI
    },
});
