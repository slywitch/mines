import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Params from './src/Params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando Minas!</Text>
        <Text style={styles.instructions}>Tamanho da grade:
          {Params.getRowsAmount()}x{Params.getCollumnsAmount()}</Text>

        <Field />
      </View>    
    ); 
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
  },
});