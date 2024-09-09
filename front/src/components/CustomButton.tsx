import React from 'react';
import {Pressable, StyleSheet, Text, View, PressableProps, Dimensions} from 'react-native';
import {colors} from "../constants";

// extends pressableProps를 상속해주므로써 기본적인 내장 props를 사용할 수 있다. (onpress 같은 거)
interface CustomButtonProps extends PressableProps{
    label: string;
    variant?: 'filled' | 'outlined'; // 타입스크립트 옵션널 굳이 사용 안해도 되는 것
    size?: 'large' | 'medium';
    inValid?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

function CustomButton({label, variant = 'filled', size = 'large', inValid = false, ...props}: CustomButtonProps) {
    return (
        <View>
            <Pressable
                disabled={inValid}
                style={({pressed}) => [
                    styles.container,
                    inValid && styles.inValid,
                    pressed ? styles[`${variant}Pressed`] : styles[variant],
                ]}
                {...props}>
                <View style={styles[size]}>
                    <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
                </View>

            </Pressable>
        </View>
     )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    inValid: {
        opacity: 0.5,
    },
    filled: {
        backgroundColor: colors.PINK_700,
    },
    outlined: {
        borderColor: colors.PINK_700,
        borderWidth: 1,
    },
    large: {
        width: '100%',
        paddingVertical: deviceHeight > 700 ? 15 : 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    medium: {
        width: '50%',
        paddingVertical: deviceHeight > 700 ? 12 : 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        fontWeight: "700",
    },
    filledText: {
        color: colors.WHITE,
    },
    outlinedText: {
        color: colors.PINK_700,
    },
    filledPressed: {
        backgroundColor: colors.PINK_500
    },
    outlinedPressed: {
        borderColor: colors.PINK_700,
        borderWidth: 1,
        opacity: 0.5
    }

});

export default CustomButton;

