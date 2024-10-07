import { findOneProduct } from "@api";
import { ProductItem } from "Models/ProductItem";
import { useEffect, useState } from "react";

interface IUseProductParams {
    id: string;
}

export function useProduct({ id }: IUseProductParams) {
    const [product, setProduct] = useState<ProductItem | null>(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const remoteProduct = await findOneProduct(id);
                setProduct(new ProductItem(remoteProduct));
            } catch (error) {
                console.error(error);
            }
        };

        fetchMenuItems();
    }, []);

    return { product };
}
