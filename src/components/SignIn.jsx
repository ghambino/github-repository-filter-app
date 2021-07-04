import React from 'react';
import { Formik, useField } from 'formik';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import * as yup from 'yup';



import { Styles } from '../themes/theme';
import FormikTextInput from './FormikTextInput';

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
  username: yup.mixed().required('username is required'),
  password: yup.mixed().required('password is required')
})


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

    // const conditionalStyle = [
    //     styles.form,
    //     error && styles.formError
    // ]



    // const [userfield, usermeta, userhelpers] = useField('username');
    // const [passfield, passmeta, passhelpers] = useField('password');
    return(
        <View style={styles.container}>
                {/* <TextInput 
                    placeholder='Username'
                    value={userfield.value}
                    onChange={text => userhelpers.setValue(text)}
                    style={styles.form}               
                />
                <TextInput 
                    placeholder='Password'
                    value={passfield.value}
                    onChange={text => passhelpers.setValue(text)} 
                    style={styles.form}              
                />
                 <Pressable onPress={onSubmit} style={styles.buton}>
                <Text style={styles.text}> Sign In</Text>
                </Pressable>  */}

             <FormikTextInput name='username' placeholder="Username" />
            <FormikTextInput name='password' placeholder="Password" />
            <Pressable style={styles.buton}>
                <Text style={styles.text}> Sign In</Text>
            </Pressable> 
        </View>
    )
}

const SignIn = () => {
    
    const onSubmit = (values) => {
        console.log(values);
      };
    
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}

        </Formik>
    )
}

export default SignIn