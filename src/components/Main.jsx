import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';


import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e4e8'
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/signIn'>
                    <SignIn />
                </Route>
                <Redirect to='/'/>
            </Switch>
            
        </View>
    )
};

export default Main;