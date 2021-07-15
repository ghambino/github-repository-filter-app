import { useState, useContext } from "react";
import { useApolloClient, useMutation } from "@apollo/client";
import { Authorize_User } from "../graphql/mutation";
import AuthStorageContext from "../contexts/AuthStorageContext";



const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const client = useApolloClient()

    const [errorMessage, setErrorMessage] = useState('');

    const [mutate, result] = useMutation(Authorize_User, {
        onError: (error) => {
            setErrorMessage(error.graphQLErrors[0].message)
        }
    })

    const signIn = async ({username, password}) => {
    
       const { data } = await  mutate({ variables: {
                 username, password
        }})

        if (!data){
            throw new Error(`invalid username or password..`)
        }
        
            const token = data.authorize.accessToken;
            await authStorage.setAccessToken(token);
            await client.resetStore();

    }

    return [signIn, result, errorMessage]
        
}

export default useSignIn