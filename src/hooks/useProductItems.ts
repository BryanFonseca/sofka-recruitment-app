import { findAllProducts } from "@api";
import { ProductItem } from "Models/ProductItem";
import { useEffect, useState } from "react";

export const useProductItems = () => {
    const [productItems, setProductItems] = useState<ProductItem[]>([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const remoteProducts = await findAllProducts();
                setProductItems(
                    remoteProducts.map((item) => new ProductItem(item))
                );
            } catch (error) {
                console.error(error);
            }
        };

        fetchMenuItems();
    }, []);

    return { productItems };
};
