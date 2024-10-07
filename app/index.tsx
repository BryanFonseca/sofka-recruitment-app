import { View } from "react-native";
import { ProductsList } from "components/features/ProductsList/ProductsList";
import { Searchbar } from "../src/components/features/Searchbar/Searchbar";
import { Button } from "@ui";
import { useProductItems } from "hooks/useProductItems";
import { useState } from "react";
import { ProductsCount } from "components/features/ProductsList/ProductsCount";

function Page() {
    const { productItems } = useProductItems();
    const [filterText, setFilterText] = useState("");
    const filteredProducts = productItems.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <View
            style={{ gap: 24, height: "97%", justifyContent: "space-between" }}
        >
            <Searchbar value={filterText} onChange={setFilterText} />

            <View style={{ flexGrow: 1, gap: 8 }}>
                <ProductsCount count={filteredProducts.length} />
                <ProductsList products={filteredProducts} />
            </View>

            <Button>Agregar</Button>
        </View>
    );
}

export default Page;
