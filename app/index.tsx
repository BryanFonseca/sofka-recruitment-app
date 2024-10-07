import { View, Text } from "react-native";
import { ProductsList } from "components/features/ProductsList/ProductsList";
import { Searchbar } from "../src/components/features/Searchbar/Searchbar";
import { Button } from "@ui";
import { useState } from "react";
import { ProductsCount } from "components/features/ProductsList/ProductsCount";
import { Link } from "expo-router";
import { useProductItems } from "@hooks";

function Page() {
    const { productItems, isLoading, isError } = useProductItems();
    const [filterText, setFilterText] = useState("");
    const filteredProducts = productItems.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (isLoading) return <Text>Loading...</Text>;

    if (isError) return <Text>Some error ocurred while fetching the data.</Text>;

    return (
        <View
            style={{ gap: 24, height: "97%", justifyContent: "space-between" }}
        >
            <Searchbar value={filterText} onChange={setFilterText} />

            <View style={{ flexGrow: 1, gap: 8 }}>
                <ProductsCount count={filteredProducts.length} />
                <ProductsList products={filteredProducts} />
            </View>

            <Link href="/create" asChild>
                <Button>Agregar</Button>
            </Link>
        </View>
    );
}

export default Page;
