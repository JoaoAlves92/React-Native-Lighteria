import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Cabecalho from './componentes/cabecalho';
import { DATA } from '../../utils/data';
import { Item } from './componentes/produtos/';

const Lista = () => {
    return(
        <View style={styles.container}>
            <FlatList
            numColumns={2}
            data={DATA}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={ item => item.id}
            ListHeaderComponent={
                <Cabecalho/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 8
    }
});

export default Lista