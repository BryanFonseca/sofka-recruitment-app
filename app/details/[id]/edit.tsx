import { useEditProduct, useProduct } from "@hooks";
import { ICreationFormValues } from "components/features/ProductForm/interfaces";
import { ProductForm } from "components/features/ProductForm/ProductForm";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ProductItem } from "Models/ProductItem";
import { FormProvider, useForm } from "react-hook-form";
import { View, Text } from "react-native";

interface IEditFormProps {
    defaultValues: ICreationFormValues;
    onEditSuccess: (newId: string) => void;
}

function EditForm({ defaultValues, onEditSuccess }: IEditFormProps) {
    const form = useForm<ICreationFormValues>({ defaultValues });
    const { editProduct } = useEditProduct({
        id: defaultValues.id,
        onSuccess: onEditSuccess,
    });

    function handleSubmit(values: ICreationFormValues) {
        editProduct(new ProductItem(values));
    }

    function handleResetForm() {
        form.reset();
    }

    return (
        <FormProvider {...form}>
            <ProductForm onSubmit={handleSubmit} onReset={handleResetForm} />
        </FormProvider>
    );
}

function EditPage() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { product } = useProduct({ id: typeof id === "string" ? id : id[0] });

    if (!product) return <Text>Cargando...</Text>;

    function handleEdit(newId: string) {
        router.navigate(`details/${newId}`);
    }

    return (
        <View style={{ gap: 24, flex: 1 }}>
            <Text style={{ fontFamily: "robotoSlab_600", fontSize: 26 }}>
                Formulario de Edición
            </Text>

            <EditForm
                onEditSuccess={handleEdit}
                defaultValues={{
                    id: product.id,
                    description: product.description,
                    logo: product.logo,
                    name: product.name,
                    releaseDate: product.releaseDate,
                    revisionDate: product.revisionDate,
                }}
            />
        </View>
    );
}

export default EditPage;
