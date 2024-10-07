import { createProduct, deleteProduct } from "@api";
import { ProductItem } from "Models/ProductItem";

interface IUseDeleteProductParams {
    id: string;
    onSuccess?: () => void;
    onFailure?: () => void;
}

export function useDeleteProduct({
    id,
    onSuccess = () => {},
    onFailure = () => {},
}: IUseDeleteProductParams) {
    return {
        deleteProduct: async () => {
            try {
                const r = await deleteProduct(id);
                console.log(r);
                onSuccess();
            } catch (error) {
                onFailure();
            }
        },
        isLoading: true,
        isError: false,
    };
}
