import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AuthHomeScreen from "../../screens/auth/AuthHomeScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import {authNavigations} from "../../constants/navigations";
import SignupScreen from "../../screens/auth/SignupScreen";


export type AuthStackParamList = {
    [authNavigations.AUTH_HOME] : undefined;
    [authNavigations.LOGIN]: undefined;
    [authNavigations.SIGNUP]: undefined;
}
const Stack = createStackNavigator<AuthStackParamList>();
function AuthStackNavigator() {


    return (
        <Stack.Navigator
            screenOptions={{   // 네비게이션 옵션 설정
                cardStyle: {
                    backgroundColor: 'white',
                },
                headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'gray',
                },
                headerTitleStyle: {
                    fontSize: 15
                },
                headerTintColor: 'black',
            }}>
            <Stack.Screen
                name={authNavigations.AUTH_HOME}
                component={AuthHomeScreen}
                options={{
                    headerTitle: '',
                    headerShown: false, // 헤더 없애기 옵션
                }}
            />
            <Stack.Screen
                name={authNavigations.LOGIN}
                component={LoginScreen}
                options={{
                    headerTitle: '로그인'
                }}
            />
            <Stack.Screen
                name={authNavigations.SIGNUP}
                component={SignupScreen}
                options={{
                    headerTitle: '회원가입'
                }}
            />
        </Stack.Navigator>
     )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;

