import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DataContext} from '../../provider';
import Botao from '../../componentes/Botao';
import {CheckoutItem} from './checkoutItem';
import {useNavigation} from '@react-navigation/core';

const Checkout = () => {
  const {itemsCheckout} = useContext(DataContext);
  const navigation = useNavigation();

  const valorTotal = itemsCheckout.reduce(
    (acumulado, atual) => acumulado + atual.quantidade * atual.preco,
    0,
  );

  const Titulo = ({children}) => <Text style={styles.titulo}>{children}</Text>;
  const Total = ({children}) => <Text style={styles.total}>{children}</Text>;

  return (
    <View style={styles.container}>
      <Titulo>Checkout</Titulo>
      {itemsCheckout.map((item) => (
        <CheckoutItem {...item} key={item.id} />
      ))}
      <Total>Total: R$ {valorTotal}</Total>
      <Botao texto={'FINALIZAR COMPRA'} onPress={() => {}}/>
      <TouchableOpacity onPress={() => navigation.push('listaProdutos')}>
        <Text style={styles.continuarTexto}>Continuar comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30
  },
  total: {
    fontSize: 20,
    marginVertical: 36,
  },
  continuarTexto: {
    fontSize: 12,
    marginTop: 20,
    textAlign: 'center',
    color: '#1277f2'
  },
});

export default Checkout