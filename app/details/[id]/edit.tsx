import { useEditProduct, useProduct } from "@hooks";
import { ICreationFormValues } from "components/features/ProductForm/interfaces";
import { ProductForm } from "components/features/ProductForm/ProductForm";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { View, Text } from "react-native";

interface IEditFormProps {
    defaultValues: ICreationFormValues;
}

function EditForm({ defaultValues }: IEditFormProps) {
    const router = useRouter();

    const form = useForm<ICreationFormValues>({
        defaultValues: {
            id: defaultValues.id,
            description: defaultValues.description,
            logo: defaultValues.logo,
            name: defaultValues.name,
            releaseDate: defaultValues.releaseDate,
            revisionDate: defaultValues.revisionDate,
        },
    });
    const { handleSubmit: handleSubmitWrapper, reset } = form;

    const { editProduct } = useEditProduct({
        id: defaultValues.id,
        onSuccess: () => {
            // TODO: This shouldn't be here
            router.back();
        },
    });

    function handleSubmit(values: ICreationFormValues) {
        editProduct(values);
    }

    function handleResetForm() {
        reset();
    }

    return (
        <View style={{ gap: 24 }}>
            <Text style={{ fontFamily: "robotoSlab_600", fontSize: 26 }}>
                Formulario de Edición
            </Text>

            <FormProvider {...form}>
                <ProductForm
                    checkId={false}
                    onSubmit={handleSubmitWrapper(handleSubmit)}
                    onReset={handleResetForm}
                />
            </FormProvider>
        </View>
    );
}

function EditPage() {
    const { id } = useLocalSearchParams();
    const { product } = useProduct({ id: typeof id === "string" ? id : id[0] });

    if (!product) return <Text>Cargando...</Text>;

    return <EditForm defaultValues={product} />;
}

export default EditPage;
