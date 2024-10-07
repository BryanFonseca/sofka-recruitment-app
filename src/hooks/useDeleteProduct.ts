import { deleteProduct as deleteProductApi } from "@api";
import { queryKeys } from "@constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductItem } from "Models/ProductItem";

interface IUseDeleteProductParams {
    id: string;
    onSuccess?: () => void;
    onError?: () => void;
}

export function useDeleteProduct({
    id,
    onSuccess = () => {},
    onError = () => {},
}: IUseDeleteProductParams) {
    const queryClient = useQueryClient();
    const {
        mutate: deleteProduct,
        isPending: isLoading,
        isError,
    } = useMutation({
        mutationFn: () => deleteProductApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.products],
            });
            onSuccess();
        },
        onError,
    });
    return {
        deleteProduct,
        isLoading,
        isError,
    };
}
