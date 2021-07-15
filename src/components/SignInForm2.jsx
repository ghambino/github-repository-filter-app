import React from 'react';
import { useField } from 'formik';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import { Styles } from '../themes/theme';

const customStyle = StyleSheet.create({
    inputField: {
        padding: 10,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 3,
        marginTop: 12,
    },
    container: {
        margin: 0,
        padding: 20,
        backgroundColor: 'white'
    }, 
    buton: {
        backgroundColor:  Styles.colorPrimary.color,
        padding: 20,
        borderRadius: 3,
        marginTop: 12,
    },
    errorText: {
        marginTop: 3,
        color: '#d73a4a'
    },
})

const SignInForm2 = ({onSubmit}) => {
    const [userfield, usermeta, userhelpers] = useField('username')
    const [passfield, passmeta, passhelpers] = useField('password')

    return (
        <View style={customStyle.container}>
            <View>

            <TextInput 
                onChangeText={text => userhelpers.setValue(text)}
                placeholder='Username'
                value={userfield.value}
                onBlur={() => userhelpers.setTouched(true)}
                testID='usernameField'
                error={usermeta.error}
                style={customStyle.inputField}
                
            />
            {usermeta.error && <Text style={customStyle.errorText}>{usermeta.error}</Text>}

            </View>
            <View>

            <TextInput 
                onChangeText={text => passhelpers.setValue(text)}
                placeholder='Password'
                onBlur={() => userhelpers.setTouched(true)}
                value={passfield.value}
                testID='usernameField'
                error={passmeta.error}
                secureTextEntry={true}
                style={customStyle.inputField}
            />
            {usermeta.error && <Text style={customStyle.errorText}>{usermeta.error}</Text>}
            </View>  

            <Button style={customStyle.buton} title="submit" onPress={onSubmit} />
                
        </View>
    )
};

export default SignInForm2