import React from 'react';
import { View, Text } from 'react-native';
import Background from './componentes/Background';
import DescricaoItem from './componentes/DescricaoItem';

const DetalhesProdutos = ({route}) => {
    const {id, titulo, imagem, estudio, itemName, preco, itemDesc} = route.params;
    return(
        <View style={{ flex: 1 }}>
            <Background/>
            <DescricaoItem
            id={id}
            titulo={titulo}
            imagem={imagem}
            estudio={estudio}
            itemName={itemName}
            preco={preco}
            itemDesc={itemDesc}
            />
        </View>
    );
};

export default DetalhesProdutos