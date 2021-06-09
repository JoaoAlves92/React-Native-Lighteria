import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Lista from './src/views/listaProdutos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetalhesProdutos from './src/views/detalhesProdutos';
import Provider from './src/provider';
import Checkout from './src/views/checkout';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Provider>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="listaProdutos">
            <Stack.Screen
            name="listaProdutos"
            component={Lista}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="detalhesProdutos"
            component={DetalhesProdutos}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="checkout"
            component={Checkout}
            options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F4F0F4',
    flex: 1
  }
});