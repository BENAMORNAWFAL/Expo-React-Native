import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

export default function LoginScreen() {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Home')
    };
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/image.png')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
            <BlurView intensity={50} style={styles.blurContainer}>
                <View style={styles.overlay}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        keyboardType="phone-pad"

                    />
                    <Button
                        title="Login"
                        onPress={handleLogin}
                    />
                </View>
            </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'gray',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    blurContainer:{
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        left: 25,
        right: 25,
        top: '30%',
        bottom: '30%',
        
    }
});