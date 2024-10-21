import type { ReactNode } from "react";

import {
    KeyboardAvoidingView,
    ScrollView,
    View,
    Text,
    Platform,
} from "react-native";
import { useFormContext } from "react-hook-form";

import { Button, Field } from "@ui";
import { FormInput } from "./FormInput";
import { isFutureDate, isValidDateFormat } from "@utils";
import { exists } from "@api";
import { designSystem } from "@constants";
import { ICreationFormValues } from "./interfaces";

interface IProductForm {
    onSubmit: (values: ICreationFormValues) => void;
    onReset: () => void;
}

export function ProductForm({ onSubmit, onReset }: IProductForm) {
    const {
        control,
        formState: { errors, defaultValues },
        watch,
        handleSubmit: handleSubmitWrapper,
    } = useFormContext<Omit<ICreationFormValues, "revisionDate">>();

    const releaseDate = watch("releaseDate");

    function handleSubmit(values: Omit<ICreationFormValues, "revisionDate">) {
        onSubmit({
            ...values,
            revisionDate: addOneYear(releaseDate),
        });
    }

    return (
        <KeyboardAvoidingContainer>
            <FormInput
                label="ID"
                name="id"
                placeholder="ID"
                control={control}
                hasError={!!errors.id}
                errorMessage={errors.id?.message}
                rules={{
                    required: {
                        value: true,
                        message: "Este campo es requerido",
                    },
                    minLength: {
                        value: 3,
                        message: "Mínimo 3 caracteres",
                    },
                    maxLength: {
                        value: 10,
                        message: "Máximo 10 caracteres",
                    },
                    validate: {
                        validId: async (id) => {
                            // In real-world scenarios this wouldn't be necessary
                            if (id === defaultValues?.id) return true;
                            const alreadyExists = await exists(id);
                            if (alreadyExists) return "ID ya existe";
                            return true;
                        },
                    },
                }}
            />
            <FormInput
                label="Nombre"
                name="name"
                placeholder="Producto 1"
                control={control}
                hasError={!!errors.name}
                errorMessage={errors.name?.message}
                rules={{
                    required: {
                        value: true,
                        message: "Este campo es requerido",
                    },
                    minLength: {
                        value: 5,
                        message: "Mínimo 5 caracteres",
                    },
                    maxLength: {
                        value: 100,
                        message: "Máximo 100 caracteres",
                    },
                }}
            />
            <FormInput
                label="Descripción"
                name="description"
                placeholder="Producto usado para..."
                control={control}
                hasError={!!errors.description}
                errorMessage={errors.description?.message}
                rules={{
                    required: {
                        value: true,
                        message: "Este campo es requerido",
                    },
                    minLength: {
                        value: 10,
                        message: "Mínimo 10 caracteres",
                    },
                    maxLength: {
                        value: 200,
                        message: "Máximo 200 caracteres",
                    },
                }}
            />
            <FormInput
                label="Logo"
                name="logo"
                placeholder="Logo URL"
                control={control}
                hasError={!!errors.logo}
                errorMessage={errors.logo?.message}
                rules={{
                    required: {
                        value: true,
                        message: "Este campo es requerido",
                    },
                }}
            />
            <FormInput
                label="Fecha Liberación"
                name="releaseDate"
                placeholder="DD/MM/YYYY"
                control={control}
                hasError={!!errors.releaseDate}
                errorMessage={errors.releaseDate?.message}
                rules={{
                    required: {
                        value: true,
                        message: "Este campo es requerido",
                    },
                    validate: {
                        isValidDate: (value) => {
                            const isValid = isValidDateFormat(value);
                            if (!isValid) return "Fecha inválida";
                        },
                        isFutureDate: (value) => {
                            const isFuture = isFutureDate(value);
                            if (!isFuture) {
                                return "La fecha debe ser igual o mayor a la fecha actual";
                            }
                        },
                    },
                }}
            />
            <Field
                label="Fecha Revisión"
                render={() => (
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: checkDate(releaseDate)
                                ? designSystem.colors.lightGray
                                : designSystem.colors.danger,
                            borderRadius: 3,
                            paddingVertical: 8,
                            paddingHorizontal: 10,
                            backgroundColor: "#F3F3F3",
                        }}
                    >
                        <Text style={{ color: "#BBB" }}>
                            {addOneYear(releaseDate)}
                        </Text>
                    </View>
                )}
                hasError={!checkDate(releaseDate)}
                errorMessage={
                    !checkDate(releaseDate)
                        ? "Fecha de Liberación inválida"
                        : ""
                }
            />

            <View style={{ gap: 8 }}>
                <Button onPress={handleSubmitWrapper(handleSubmit)}>
                    Enviar
                </Button>
                <Button onPress={onReset} variant="secondary">
                    Reiniciar
                </Button>
            </View>
        </KeyboardAvoidingContainer>
    );
}

function addOneYear(date: string) {
    if (!date) return "-";
    const isValid = checkDate(date);
    if (!isValid) return "-";
    const [day, month, year] = date.split("/");
    return `${day}/${month}/${+year + 1}`;
}

function checkDate(date: string) {
    if (!date) return true;
    return isValidDateFormat(date) && isFutureDate(date);
}

function KeyboardAvoidingContainer({ children }: { children: ReactNode }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={130}
            style={{ flex: 1 }}
        >
            <ScrollView
                testID="product-form"
                contentContainerStyle={{
                    flexGrow: 1,
                    gap: 24,
                }}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
