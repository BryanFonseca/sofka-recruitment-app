import { InputField } from "@ui";
import { ComponentProps } from "react";
import { Controller, FieldValues } from "react-hook-form";

interface IFormInputProps<T extends FieldValues>
    extends Pick<
        ComponentProps<typeof Controller<T>>,
        "control" | "name" | "rules"
    > {
    label: string;
    hasError?: boolean;
    errorMessage?: string;
    placeholder?: string;
}

export function FormInput<T extends FieldValues>({
    control,
    name,
    label,
    rules,
    hasError = false,
    errorMessage = "",
    placeholder = "",
}: IFormInputProps<T>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { value, onChange } }) => (
                <InputField
                    autoCapitalize='none'
                    placeholder={placeholder}
                    label={label}
                    value={value}
                    onChangeText={onChange}
                    hasError={hasError}
                    errorMessage={errorMessage}
                />
            )}
        />
    );
}