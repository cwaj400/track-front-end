import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Button, Input, ListItem} from 'react-native-elements';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";
import {NavigationEvents, SafeAreaView} from 'react-navigation';
import {Context as TrackContext} from "../context/TrackContext";
import {Context as CustomerContext} from "../context/CustomerContext";
import {navigate} from "../navigationRef";
import {Feather} from "@expo/vector-icons";
import NewCustomerForm from "../components/NewCustomerForm";

const NewCustomerScreen = ({navigation}) => {

    const {state, createCustomer} = useContext(CustomerContext);

    return (
        <View>
            <Spacer>
                <NewCustomerForm onSubmit={(fullName, address) => {createCustomer(fullName, address)}}/>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {}
})

export default NewCustomerScreen;
