import React, { useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignUpScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        //Piece of state for each input

        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
                // onDidFocus={() => {}}
                // onWillBlur={() => {}}
                // onDidBlur={() => {}}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                //or can be onSubmit={signup}
                onSubmit={({email, password}) => signup({email, password})}/>
            <NavLink routeName="Signin" text="Already have an account? Sign in instead."/>
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },

})

export default SignUpScreen;
