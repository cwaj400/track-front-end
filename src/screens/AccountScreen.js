import React, {useContext, useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (

        <View style={styles.backgroundStyle}>
            <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Spacer>
                <Button onPress={signout} title="Sign Out"/>
            </Spacer>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {}
})

export default AccountScreen;
