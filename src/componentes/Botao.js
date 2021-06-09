import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Botao = ({onPress, texto}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1277f2',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 15
    },
    texto: {
        color: 'white',
        textAlign: 'center'
    }
});

export default Botao