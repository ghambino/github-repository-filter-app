import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-native';

import useSignIn from '../hook/useSignIn';
import SignInForm from './signInForm';


const initialValues = {
    username: '',
    password: ''
};


const validationSchema = Yup.object({
  username: Yup
    .string()
    .max(20, 'username exceed number of character')
    .required('username is required'),

  password: Yup
    .string()
    .min(4, 'too short character')
    .required('password is required')
});





const SignIn = () => {
    const [ signIn, errorMessage ] = useSignIn();
    const history = useHistory()

    const onSubmit =  async (values) => {

        const {username, password} = values
        
        try {
            await signIn({username, password});
            history.push("/");
        }
        catch (error){
            console.log(error)
            console.log(errorMessage)
        }
    };


  
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}

        </Formik>
    )
}

export default SignIn