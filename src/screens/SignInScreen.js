import React, {useContext, useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context as AuthContext} from "../context/AuthContext";
import {NavigationEvents} from "react-navigation";

const SignInScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.backgroundStyle}>
            <NavigationEvents
            onWillFocus={clearErrorMessage}
            // onDidFocus={() => {}}
            // onWillBlur={() => {}}
            // onDidBlur={() => {}}
            />
            <AuthForm headerText="Sign In"
                      onSubmit={(email, password) => {signin(email, password)}}
                      errorMessage={state.errorMessage}
                      submitButtonText="Sign In"/>
            <NavLink text="Sign up here" routeName="Signup"/>
        </View>
    )
}

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}
//<NavigationEvents onWillFocus={clearErrorMessage}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SignInScreen;
