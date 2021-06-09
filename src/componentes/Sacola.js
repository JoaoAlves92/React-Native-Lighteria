import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DataContext } from '../provider';

const Sacola = () => {
    const navigation = useNavigation();
    const {itemsCheckout} = useContext(DataContext);
    return (
        <TouchableOpacity onPress={() => navigation.push('checkout')}>
            <View style={styles.imagem}>
                <Image source={require('../assets/icone-sacola.png')} style={{ height: 30, width: 30}}/>
                { itemsCheckout.length > 0 ? (<View style={styles.container}>
                    <Text style={styles.containerTexto}>{itemsCheckout.reduce((acumulado, atual) => acumulado + atual.quantidade, 0)}</Text>
                </View>) : null }
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imagem:{
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 10
    },
    container:{
        backgroundColor: 'red',
        borderRadius: 100,
        marginTop: -22,
        marginLeft: 11
    },
    containerTexto: {
        textAlign: 'center',
        padding: 2,
        fontSize: 10,
        color: 'white'
    }
});

export default Sacola