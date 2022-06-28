import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Spacer from "./Spacer";
import {Input} from "react-native-elements";

const AuthForm = ({ submitButtonText, errorMessage, onSubmit, headerText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <View style={styles.container}>
            <Spacer>
                <Text style={styles.title}>{headerText}</Text>
            </Spacer>
            <Input autoCorrect={false}
                   autoCapitalize="none"
                   value={email}
                   onChangeText={(newEmail) => setEmail(newEmail)}
                   label="Email"
                //or onChangeText={setEmail}
            />
            <Spacer/>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)} label="Password"
                secureTextEntry={true}
                //or just secureTextEntry
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Spacer>
                <Button onPress={() => onSubmit({email, password})} title={submitButtonText}/>
            </Spacer>

        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {},
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    title: {
        fontSize: 30
    }
})

export default AuthForm;
