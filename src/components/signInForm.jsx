import React from 'react';
import {View, Pressable, Text, StyleSheet } from 'react-native'
import FormikTextInput from './FormikTextInput';
import { Styles } from '../themes/theme';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white'
    }, 
    buton: {
        backgroundColor:  Styles.colorPrimary.color,
        padding: 20,
        borderRadius: 3,
        marginTop: 12,
        borderColor: 'red'
    },
    text: {
        textAlign: 'center',
       color: 'white',
        fontWeight: 'bold'
    }
})

const SignInForm = ({onSubmit}) => {

   
    return(
        <View style={styles.container}>

             <FormikTextInput name='username' placeholder="Username" testID="usernameField" />

            <FormikTextInput name='password' placeholder="Password" secureTextEntry={true} testID="passwordField"/>

            <Pressable style={styles.buton} onPress={onSubmit}>
                <Text style={styles.text}> Sign In</Text>
            </Pressable> 

        </View>
    )
}

export default SignInForm