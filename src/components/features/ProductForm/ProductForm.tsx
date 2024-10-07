import { View } from "react-native";
import { Button } from "@ui";
import { useFormContext } from "react-hook-form";
import { FormInput } from "./FormInput";
import { isFutureDate, isOneYearLater, isValidDateFormat } from "@utils";
import { ProductItem } from "../../../Models/ProductItem";
import { exists } from "@api";

interface IProductForm {
    onSubmit: () => void;
    onReset: () => void;
    checkId?: boolean;
}

export function ProductForm({ onSubmit, onReset, checkId = true }: IProductForm) {
    const {
        control,
        formState: { errors },
    } = useFormContext<ProductItem>();

    return (
        <View testID="product-form" style={{gap: 24}}>
            <View style={{ gap: 8 }}>
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
                                if (!checkId) return true;
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
                <FormInput
                    label="Fecha Revisión"
                    name="revisionDate"
                    placeholder="DD/MM/YYYY"
                    control={control}
                    hasError={!!errors.revisionDate}
                    errorMessage={errors.revisionDate?.message}
                    rules={{
                        required: {
                            value: true,
                            message: "Este campo es requerido",
                        },
                        validate: {
                            isOneYearLater: (value, { releaseDate }) => {
                                const isValid = isOneYearLater(
                                    value,
                                    releaseDate
                                );
                                if (!isValid)
                                    return "Debe ser exactamente un año mayor a Fecha Liberación";
                            },
                        },
                    }}
                />
            </View>

            <View style={{ gap: 8 }}>
                <Button onPress={onSubmit}>Enviar</Button>
                <Button onPress={onReset} variant="secondary">
                    Reiniciar
                </Button>
            </View>
        </View>
    );
}
