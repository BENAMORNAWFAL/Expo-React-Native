import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Image } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function OpenAppScreen() {
    const navigation = useNavigation();
    const [active, setActive] = useState(false)
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
            navigation.navigate('Login');
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current) {
                await videoRef.current.playAsync();
            }
        };

        playVideo();

        return () => {
            if (videoRef.current) {
                videoRef.current.pauseAsync();
            }
        };
    }, []);


    

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={require('../assets/images/VideoCamelDelivery1 (2).mp4')}
                useNativeControls={false}
                resizeMode="cover"
                shouldPlay
                style={StyleSheet.absoluteFillObject}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        gap: 30
    },
    input: {
        width: '90%',
        height: 60,
        backgroundColor: '#13131461',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
      },
});
