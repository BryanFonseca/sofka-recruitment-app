import { ProductsList } from "components/features/ProductsList/ProductsList";
import { Searchbar } from "../src/components/features/Searchbar/Searchbar";
import { View } from "react-native";
import { Button } from "@ui";
import { useProductItems } from "hooks/useProductItems";

function Page() {
    const { productItems } = useProductItems();

    return (
        <View
            style={{ gap: 24, height: "97%", justifyContent: "space-between" }}
        >
            <Searchbar />
            <ProductsList products={productItems} />
            <Button>Agregar</Button>
        </View>
    );
}

export default Page;
