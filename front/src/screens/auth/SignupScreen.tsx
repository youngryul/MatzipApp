import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import InputField from "../../components/InputField";
import useForm from "../../hooks/useForm";
import CustomButton from "../../components/CustomButton";
import {validateSignup} from "../../util";
import useAuth from "../../hooks/queries/useAuth";


function SignupScreen() {
    const passwordRef = useRef<TextInput | null>(null);
    const passwordConfirmRef = useRef<TextInput | null>(null);
    const {signupMutation, loginMutation} = useAuth();
    const signup = useForm({
        initialValue: {email : '', password: '', passwordConfirm: ''},
        validate: validateSignup,
    });

    const handleSubmit = () => {
        console.log("!!")
        const {email, password} = signup.values;

        signupMutation.mutate(
            {email, password},
            {onSuccess: () => loginMutation.mutate({email, password})},
            );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <InputField
                    autoFocus
                    placeholder="이메일"
                    error={signup.errors.email}
                    touched={signup.touched.email}
                    inputMode="email" // 키보드의 입력 방식을 선택할 수 있다. (골뱅이 추가)
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => passwordRef.current?.focus()} // 다 입력 후 다음 창으로 넘어감
                    {...signup.getTextInputProps('email')}
                />
                <InputField
                    ref={passwordRef}
                    placeholder="비밀번호"
                    textContentType="oneTimeCode"
                    error={signup.errors.password}
                    touched={signup.touched.password}
                    secureTextEntry // 비밀번호 *** 처리
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => passwordConfirmRef.current?.focus()}
                    {...signup.getTextInputProps('password')}
                />
                <InputField
                    placeholder="비밀번호 확인"
                    error={signup.errors.passwordConfirm}
                    touched={signup.touched.passwordConfirm}
                    secureTextEntry // 비밀번호 *** 처리
                    onSubmitEditing={handleSubmit}
                    {...signup.getTextInputProps('passwordConfirm')}
                />
            </View>
            <CustomButton
                label="회원가입"
                variant="filled"
                size = "large"
                onPress={handleSubmit}
            />
        </SafeAreaView>
     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    inputContainer: {
        gap: 20,
        marginBottom: 30
    }
});

export default SignupScreen;

