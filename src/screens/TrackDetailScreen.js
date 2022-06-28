import React, {useContext, useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';
import {Context as TrackContext} from "../context/TrackContext";

const TrackDetailScreen = ({navigation}) => {

    //To get track stored in state.
    const _id = navigation.getParam('_id');
    const {state} = useContext(TrackContext);

    const track = state.find(t => t._id === _id);

    // let timestamp = Object.values(track)[0].timestamp;
    // let date = new Date(Math.floor(timestamp)).toLocaleString("en-UK");
    return (

        <View style={styles.backgroundStyle}>
            <Text>{track.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        height: 400,
        width: 400,
        borderColor: 'red',
    }
})

export default TrackDetailScreen;
