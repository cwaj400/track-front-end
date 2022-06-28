import React, {useContext, useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from "react-native-elements";
import {Context as TrackContext} from "../context/TrackContext";
import {NavigationEvents, withNavigationFocus} from 'react-navigation';
import {navigate} from "../navigationRef";

const TrackListScreen = () => {

    const {state, fetchTracks} = useContext(TrackContext);


    const renderItem = ({ item }) => {
        let timestamp = Object.values(item)[3][0].timestamp;

        let date = new Date(Math.floor(timestamp)).toLocaleString("en-UK");
        return (
            <TouchableOpacity onPress={() => navigate('TrackDetail', {_id: item._id})}>
                <ListItem chevron title={item.name}>
                    <Text>{item.name}</Text>
                    <Text style={{color: 'red', fontSize: 12, marginRight: 0, paddingLeft: 30}}>{date}</Text>
                </ListItem>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <NavigationEvents onDidFocus={fetchTracks}/>
            <FlatList
                style={styles.listStuff}
                data={state}
                renderItem={renderItem}
                keyExtractor={(state) => state._id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {},
    listStuff: {
        height: 400,
        width: 400,
        borderColor: 'red',
    }
})

export default withNavigationFocus(TrackListScreen);
