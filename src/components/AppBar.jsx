import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Link } from 'react-router-native';
import Constants  from 'expo-constants';

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
        fontSize: 14,
        color: 'white',
        padding: 10
    }
});

const AppBar = () => {
    return (
        
        <View style={styles.container}>
            <Link to='/'>
                <Text style={styles.text}>Repositories</Text>
            </Link>
            <Link to='/signIn'>
                <Text style={styles.text}>Sign In </Text>
            </Link>
        </View>

    )
}

export default AppBar