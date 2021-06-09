import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Botao from '../../../../componentes/Botao';
import { DataContext } from '../../../../provider';

const DescricaoItem = ({id, titulo, imagem, estudio, itemName, preco, itemDesc}) => {
    const navigation = useNavigation();
    const {adicionarItem} = useContext(DataContext);

    return(
        <View style={styles.container}>
            <View style={styles.posicao}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <View>
                            <Text style={{ fontWeight: 'bold'}}>{estudio}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 22}}>{itemName}</Text>
                            <Text style={{ color: '#CACACA', fontWeight: '300'}}>{titulo}</Text>
                        </View>
                        <Image source={imagem} style={{ width: 30, height: 72 }}/>
                    </View>
                    <Text style={{ color: '#ACAAAB' }}>{itemDesc}</Text>
                    <View style={styles.rodape}>
                        <Text style={styles.rodapeTexto}>R$ {preco}</Text>
                        <Botao onPress={() => {
                adicionarItem({
                  estudio,
                  itemName,
                  titulo,
                  id,
                  imagem,
                  preco,
                });
              }} texto={'COMPRAR'}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 4
    },
    posicao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -60
    },
    card: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 4,
        padding: 28
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    rodapeTexto: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default DescricaoItem