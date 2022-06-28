import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';

const Spacer = ({children}) => {

    return (
        <View style={styles.spacer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {},
    spacer: {
        margin: 15
    }
})

export default Spacer;
