import { editProduct as editProductApi } from "@api";
import { queryKeys } from "@constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICreationFormValues } from "components/features/ProductForm/interfaces";
import { ProductItem } from "Models/ProductItem";

interface IUseEditProductParams {
    id: string;
    onSuccess?: (newId: string) => void;
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
        mutationFn: (localProduct: ICreationFormValues) => {
            return editProductApi(id, new ProductItem(localProduct).toRemote());
        },
        onSuccess: ({ id }) => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.products],
            });
            onSuccess(id);
        },
        onError,
    });
    return {
        editProduct,
        isLoading,
        isError,
    };
}
