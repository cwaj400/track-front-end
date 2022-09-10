import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Spacer from "../components/Spacer";
import { SafeAreaView } from 'react-navigation';
import TrackCreateScreen from "./TrackCreateScreen";

const CustomerDetailScreen = () => {

    return (

        <View style={styles.backgroundStyle}>
            <SafeAreaView forceInset={{ top: 'always'}}>
                <Text style={{fontSize: 48}}>Customer List Screen</Text>
                <Spacer>
                    <TrackCreateScreen isFocused={false}/>
                    <Text h2 >Customer Detail</Text>
                </Spacer>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    backgroundStyle: {}
})

export default CustomerDetailScreen;
