import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const Item = ({id, titulo, imagem, estudio, itemName, preco, itemDesc}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.push('detalhesProdutos', {
            id,
            titulo,
            imagem,
            estudio,
            itemName,
            preco,
            itemDesc
            })}>
            <Image source={imagem} resizeMode="contain" style={styles.imagem}/>
            <Text style={styles.titulo}>{titulo}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10,
        height: 168
    },
    imagem: {
        height: 84
    },
    titulo:{
        marginTop: 10,
        color: '#848486'
    }
});