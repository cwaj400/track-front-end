import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";
import {NavigationEvents, SafeAreaView} from 'react-navigation';
import {Context as TrackContext} from "../context/TrackContext";
import {Context as CustomerContext} from "../context/CustomerContext";
import {navigate} from "../navigationRef";
import {Feather} from "@expo/vector-icons";

const CustomerListScreen = ({navigation}) => {

    const {state, fetchAllCustomers} = useContext(CustomerContext);

    let customers;
    useEffect(() => {
        const fetchAllCustomersEffect = async () => {
            fetchAllCustomers();
        }
        fetchAllCustomersEffect();
        if (state[0]) {
        console.log('state ' + JSON.stringify(state[0].fullName));
        }
    }, [])

    const renderItem = ({item}) => {
        // let timestamp = Object.values(item)[3][0].timestamp;

        // let date = new Date(Math.floor(timestamp)).toLocaleString("en-UK");
        return (
            <TouchableOpacity onPress={() => navigate('CustomerDetail', {_id: item._id})}>
                <ListItem chevron title={item.fullName}>
                    <Text>{item.fullName}</Text>
                    {/*<Text style={{color: 'red', fontSize: 12, marginRight: 0, paddingLeft: 30}}>{date}</Text>*/}
                </ListItem>
            </TouchableOpacity>
        );
    };

    return (
        <View options={({ navigation }) => ({
            headerTitle: 'List'
            // headerRight: () => createCustomer(navigation)
        })}>
            <NavigationEvents/>
            <FlatList
                style={styles.listStuff}
                data={state}
                renderItem={renderItem}
                keyExtractor={(state) => state._id}
            />
        </View>
    )
}

CustomerListScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => navigate("Create")}>
                    <Feather name="plus" size={30} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            );
        },
    };
};
const styles = StyleSheet.create({
    backgroundStyle: {}
})

export default CustomerListScreen;
