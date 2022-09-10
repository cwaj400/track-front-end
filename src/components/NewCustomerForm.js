import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Spacer from "./Spacer";
import {Input} from "react-native-elements";

const NewCustomerForm = ({ onSubmit}) => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');

    return (

        <View style={styles.container}>
            <Input autoCorrect={false}
                   value={fullName}
                   placeholder={'Full Name'}
                   onChangeText={(newName) => setFullName(newName)}
            />
            <Spacer/>
            <Input autoCorrect={false}
                   value={address}
                   placeholder={'Address'}
                   onChangeText={(address) => setAddress(address)}
            />
            <Spacer>
                <Button onPress={() => onSubmit({fullName, address})} title={'Submit'}/>
            </Spacer>

        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {},
})

export default NewCustomerForm;
