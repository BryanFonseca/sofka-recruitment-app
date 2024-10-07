import { editProduct as editProductApi } from "@api";
import { queryKeys } from "@constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductItem } from "Models/ProductItem";

interface IUseEditProductParams {
    id: string;
    onSuccess?: () => void;
    onError?: () => void;
}

export function useEditProduct({
    id,
    onSuccess = () => {},
    onError = () => {},
}: IUseEditProductParams) {
    const queryClient = useQueryClient();
    const {
        mutate: editProduct,
        isPending: isLoading,
        isError,
    } = useMutation({
        mutationFn: (localProduct: ProductItem) => {
            return editProductApi(id, ProductItem.toRemote(localProduct));
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.products],
            });
            queryClient.invalidateQueries({
                queryKey: [queryKeys.products, id],
            });
            onSuccess();
        },
        onError,
    });
    return {
        editProduct,
        isLoading,
        isError,
    };
}
