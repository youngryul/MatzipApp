import React, {useRef} from 'react';
import {Dimensions, StyleSheet, TextInput, View, TextInputProps, Text, Pressable} from 'react-native';
import {colors} from "../constants";

interface InputFieldProps extends TextInputProps{
    disabled?: boolean;
    error?: string;
    touched?: boolean;

}

const deviceHeight = Dimensions.get('screen').height;

function InputField({disabled = false, error, touched, ...props}: InputFieldProps) {
    const innerRef = useRef<TextInput | null>(null); // input box 커서 범위 지정

    const handlePressInput = () => {
        innerRef.current?.focus();
    }

    return (
        <Pressable onPress={handlePressInput}>
            <View style={[styles.container, disabled && styles.disabled, touched && error && styles.inputError]}>
                <TextInput
                    ref={innerRef}
                    editable={!disabled}
                    placeholderTextColor={colors.GRAY_500}
                    style={[styles.input, disabled && styles.disabled]}
                    autoCapitalize="none" // 자동 대문자 제거
                    spellCheck={false}   // 맞춤법 검사 제거
                    autoCorrect={false}  // 자동완성 제거
                    {...props}
                />
                {touched && Boolean(error) && <Text style={styles.error}>{ error }</Text>}
            </View>
        </Pressable>
     )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.GRAY_200,
        padding: deviceHeight > 700 ? 15 : 10,
    },
    input: {
        fontSize: 16,
        color: colors.BLACK,
        padding: 0
    },
    disabled: {
        backgroundColor: colors.GRAY_200,
        color: colors.GRAY_700
    },
    inputError: {
        borderWidth: 1,
        borderColor: colors.RED_300
    },
    error: {
        color: colors.RED_500,
        fontSize:12,
        paddingTop: 5,
    }
});

export default InputField;

