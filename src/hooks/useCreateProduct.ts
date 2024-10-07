import { createProduct } from "@api";
import { ProductItem } from "Models/ProductItem";

interface IUseCreateProductParams {
    onSuccess?: () => void;
    onFailure?: () => void;
}

export function useCreateProduct({
    onSuccess = () => {},
    onFailure = () => {},
}: IUseCreateProductParams) {
    return {
        createProduct: async (localProduct: ProductItem) => {
            try {
                const r = await createProduct(
                    ProductItem.toRemote(localProduct)
                );
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
