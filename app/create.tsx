import { useCreateProduct } from "@hooks";
import { ICreationFormValues } from "components/features/ProductForm/interfaces";
import { ProductForm } from "components/features/ProductForm/ProductForm";
import { useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { Text, View } from "react-native";

function CreatePage() {
    const router = useRouter();

    const form = useForm<ICreationFormValues>();
    const { handleSubmit: handleSubmitWrapper, reset } = form;

    const { createProduct } = useCreateProduct({
        onSuccess: () => {
            router.navigate("/");
        },
    });

    function handleSubmit(values: ICreationFormValues) {
        createProduct(values);
    }

    function handleResetForm() {
        reset();
    }

    return (
        <View style={{ gap: 24 }}>
            <Text style={{ fontFamily: "robotoSlab_600", fontSize: 26 }}>
                Formulario de Registro
            </Text>

            <FormProvider {...form}>
                <ProductForm
                    onSubmit={handleSubmitWrapper(handleSubmit)}
                    onReset={handleResetForm}
                />
            </FormProvider>
        </View>
    );
}

export default CreatePage;
