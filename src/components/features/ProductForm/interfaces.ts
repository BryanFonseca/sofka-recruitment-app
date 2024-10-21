import { ProductItem } from "Models/ProductItem";

type ExcludeMethods<T> = {
    [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

interface ICreationFormValues extends ExcludeMethods<ProductItem> {}

export type { ICreationFormValues };
