import React, {useState, useEffect, useContext, useCallback} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {NavigationEvents, withNavigationFocus, SafeAreaView} from "react-navigation";
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from 'expo-location';
import Map from "../components/Map";
import { Context as LocationContext } from '../context/LocationContext'
import useLocationHook from '../hooks/useLocation'
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);

    //The callback for callbacks!!!!!
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])

    const [err] = useLocationHook(isFocused || recording, callback);

    return (
        <View style={styles.backgroundStyle}>
            <SafeAreaView forceInset={{top: 'always'}}>
                <Text h2>Create a Track</Text>

                <Map/>
                <TrackForm trackName="name"/>

                {/*<NavigationEvents onWillBlur={() => {*/}
                {/*    console.log('leaving')}}/>*/}
                {err ? <Text> Please enable location services</Text> : null}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {}
})

export default withNavigationFocus(TrackCreateScreen);
