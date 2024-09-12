import React, {useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import useForm from "../../hooks/useForm";
import {validateLogin} from "../../util";


function LoginScreen() {
    const passwordRef = useRef<TextInput | null>(null);

    const login = useForm({
        initialValue: {email: '', password: ''},
        validate: validateLogin
    });

    const handleSubmit = () => {
        console.log(login.values);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <InputField
                    autoFocus // 창이 맨 처음에 열릴 때 자동으로 커서 이동
                    placeholder="이메일"
                    error={login.errors.email}
                    touched={login.touched.email}
                    inputMode="email" // 키보드의 입력 방식을 선택할 수 있다. (골뱅이 추가)
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => passwordRef.current?.focus()} // 다 입력 후 다음 창으로 넘어감
                    {...login.getTextInputProps('email')}
                />
                <InputField
                    ref={passwordRef}
                    placeholder="비밀번호"
                    error={login.errors.password}
                    touched={login.touched.password}
                    secureTextEntry // 비밀번호 *** 처리
                    returnKeyType="join"
                    blurOnSubmit={false}
                    onSubmitEditing={handleSubmit}
                    {...login.getTextInputProps('password')}
                />
                <CustomButton
                    label="로그인"
                    variant="filled"
                    size = "large"
                    onPress={handleSubmit}
                />
            </View>
        </SafeAreaView>

     );
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

export default LoginScreen;

