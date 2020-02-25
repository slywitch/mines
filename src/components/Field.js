import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Params from '../Params'

export default props => {
    const styleField = [styles.field]
    //outros estilos
    if (styleField.length === 1) styleField.push(styles.regular)

    return(
        <View style={styleField}>

        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: Params.blockSize,
        width: Params.blockSize,
        borderWidth: Params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    }
})