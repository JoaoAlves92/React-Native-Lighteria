import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, Image, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import Sacola from '../../../../componentes/Sacola';

const Background = () => {
    const imgSrc = require('../../../../assets/bgimg.jpg');
    const navigation = useNavigation();
    return(
        <View style={styles.bgContainer}>
            <ImageBackground resizeMode="cover" source={imgSrc} style={styles.bgImg}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../../assets/flecha-esquerda.png')} style={styles.seta}></Image>
                    </TouchableOpacity>
                    <Sacola/>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    bgContainer: {
        flex: 6
    },
    bgImg: {
        width: Dimensions.get('window').width,
        height: '100%'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        padding: 20
    },
    seta: {
        width: 24,
        height: 24
    }
});

export default Background