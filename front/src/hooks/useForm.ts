import {useState} from "react";

interface UseFormProps<T> {
    initialValue: T;
}
function useForm<T>({initialValue}: UseFormProps<T>) {

    const [values, setValues] = useState(initialValue);

    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const handleChangeText = (name: keyof T, text: string) => {
        setValues({
            ...values,
            [name]: text,
        });
    };

    const handleBlur = (name: keyof T) => {
        setTouched({
            ...touched,
            [name]: true,
        });
    };

}

export default useForm;