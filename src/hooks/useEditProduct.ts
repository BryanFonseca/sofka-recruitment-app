import { editProduct } from "@api";
import { ProductItem } from "Models/ProductItem";

interface IUseEditProductParams {
    id: string;
    onSuccess?: () => void;
    onFailure?: () => void;
}

export function useEditProduct({
    id,
    onSuccess = () => {},
    onFailure = () => {},
}: IUseEditProductParams) {
    return {
        editProduct: async (localProduct: ProductItem) => {
            try {
                const r = await editProduct(
                    id,
                    ProductItem.toRemote(localProduct)
                );
                onSuccess();
            } catch (error) {
                onFailure();
            }
        },
        isLoading: true,
        isError: false,
    };
}
