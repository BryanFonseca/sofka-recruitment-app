import { findAllProducts } from "@api";
import { queryKeys } from "@constants";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "Models/ProductItem";
import { useEffect, useState } from "react";

export const useProductItems = () => {
    const {
        data: productItems,
        isLoading,
        isError,
    } = useQuery({
        initialData: [],
        queryKey: [queryKeys.products],
        queryFn: async () => {
            const remoteProducts = await findAllProducts();
            return remoteProducts.map((item) => new ProductItem(item));
        },
    });

    return { productItems, isLoading, isError };
};
