import React, {useContext} from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useHistory } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/client';
import { View, StyleSheet, ScrollView, Text, TouchableWithoutFeedback, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Constants  from 'expo-constants';

import { checkAuthorizedUser } from '../graphql/queries';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        minHeight: 80,
        paddingLeft: 10,
        backgroundColor: '#24292e',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
        padding: 10
    }
});
const AppBarTab = ({text, url, show, onPressing}) => {
    if (!show){
        return null
    }
    if(onPressing){
        return (
         <Link to={url} component={TouchableWithoutFeedback}>
            <Pressable onPress={onPressing}>
                <Text style={styles.text}> {text}</Text>
            </Pressable>
        </Link>
        )
    }
    return (
        <Link to={url} component={TouchableWithoutFeedback}>
            
            <Text style={styles.text}> {text}</Text>
    
        </Link>
    )
}

const AppBar = () => {
   const {data} = useQuery(checkAuthorizedUser)
    console.log(data)
   const loggedIn = data && data.authorizedUser 
   const authStorage = useContext(AuthStorageContext);
   const client = useApolloClient()
   const history = useHistory()

   const onpress = async () => {
       await authStorage.removeAccessToken();
       client.resetStore();
       history.push("/signIn")
   }
    return (
        
        <View style={styles.container}>
            {/* <ScrollView horizontal> */}

           <AppBarTab text="Repositories" url="/repositories" show='true'/>
           <AppBarTab text="Sign In" url="/signIn" show={!loggedIn}/>
           <AppBarTab text="Sign Out" url="/signOut" show={loggedIn} onPressing={onpress}/>
        

           {/* </ScrollView> */}
           
        </View>

    )
}

export default AppBar