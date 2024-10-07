import { ProductItem } from "Models/ProductItem";
import { useEffect, useState } from "react";

export const useProductItems = () => {
    const [productItems, setProductItems] = useState<ProductItem[]>([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const result = await fetch("http://localhost:3002/bp/products");
                const productItems = (await result.json()) as {
                    data: RemoteProductItem[];
                };

                setProductItems(
                    productItems.data.map((item) => new ProductItem(item))
                );
            } catch (error) {
                console.error(error);
            }
        };

        fetchMenuItems();
    }, []);

    return { productItems };
};
