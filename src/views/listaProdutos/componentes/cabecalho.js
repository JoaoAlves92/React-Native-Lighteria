import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Sacola from '../../../componentes/Sacola';

const Cabecalho = () => {
    return(
        <>
        <View style={styles.header}>
            <Text style={styles.titulo}>Lighteria</Text>
            <Sacola/>
        </View>
        <View style={styles.containerCategoria}>
            <View style={styles.separador}/>
            <View style={styles.containerTexto}>
                <Text style={styles.textoCategoria}>Categorias</Text>
            </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerCategoria:{
      paddingHorizontal: 24,
      marginTop: 5
    },
    textoCategoria:{
      paddingHorizontal:34,
      backgroundColor: '#F4F0F4',
      fontSize: 16,
      color: '#A1A5AA'
    },
    separador:{
      borderWidth: 0.5,
      borderColor: '#A1A5AA'
    },
    containerTexto:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: -12
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
      padding: 15
    },
    titulo: {
      fontSize: 28
    }
  });

export default Cabecalho