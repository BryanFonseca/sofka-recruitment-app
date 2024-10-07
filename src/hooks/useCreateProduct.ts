import { createProduct as createProductApi } from "@api";
import { queryKeys } from "@constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductItem } from "Models/ProductItem";

interface IUseCreateProductParams {
    onSuccess?: () => void;
    onError?: () => void;
}

export function useCreateProduct({
    onSuccess = () => {},
    onError = () => {},
}: IUseCreateProductParams) {
    const queryClient = useQueryClient();
    const {
        isPending: isLoading,
        isError,
        mutate: createProduct,
    } = useMutation({
        mutationFn: (localProduct: ProductItem) => {
            return createProductApi(ProductItem.toRemote(localProduct));
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.products],
            });
            onSuccess();
        },
        onError,
    });
    return {
        createProduct,
        isLoading,
        isError,
    };
}
