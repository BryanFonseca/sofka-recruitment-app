import { ProductsList } from "components/features/ProductsList/ProductsList";
import { Searchbar } from "../src/components/features/Searchbar/Searchbar";
import { View } from "react-native";
import { Button } from "@ui";
import { useProductItems } from "hooks/useProductItems";
import { useState } from "react";

function Page() {
    const { productItems } = useProductItems();
    const [filterText, setFilterText] = useState("");

    return (
        <View
            style={{ gap: 24, height: "97%", justifyContent: "space-between" }}
        >
            <Searchbar value={filterText} onChange={setFilterText} />
            <ProductsList
                products={productItems.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
                )}
            />
            <Button>Agregar</Button>
        </View>
    );
}

export default Page;
