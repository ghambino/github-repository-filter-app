import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { Styles } from '../themes/theme';


const stylingSheet = StyleSheet.create({
    form: {
        padding: 10,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 3,
        marginTop: 12,
    }, 
    formError: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 3,
        marginTop: 12,
        borderColor: 'red',
    },
    error: {
        color: 'red',
      
    }
});

const TextInput = ({ style, error, ...props}) => {
    const TextInputStyle = [
        stylingSheet.form,
        error && stylingSheet.formError,
        style
    ];

    return <NativeTextInput style={TextInputStyle} {...props} />
}

export default TextInput