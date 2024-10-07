import { findOneProduct } from "@api";
import { queryKeys } from "@constants";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "Models/ProductItem";
import { useEffect, useState } from "react";

interface IUseProductParams {
    id: string;
}

export function useProduct({ id }: IUseProductParams) {
    const { data: product, isLoading, isError } = useQuery({
        queryKey: [queryKeys.products, id],
        queryFn: async () => {
            const remoteProduct = await findOneProduct(id);
            return new ProductItem(remoteProduct);
        },
    });

    return { product, isLoading, isError };
}
