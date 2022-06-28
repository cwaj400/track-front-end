import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Spacer from './Spacer'
import {withNavigation} from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {


    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>
                    {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {},
    link: {
        color: 'blue'
    }
})

export default withNavigation(NavLink);
