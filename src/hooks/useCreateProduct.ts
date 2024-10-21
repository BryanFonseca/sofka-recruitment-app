import { createProduct as createProductApi } from "@api";
import { queryKeys } from "@constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICreationFormValues } from "components/features/ProductForm/interfaces";
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
        mutationFn: (localProduct: ICreationFormValues) => {
            return createProductApi(new ProductItem(localProduct).toRemote());
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
