// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClients';

import Main from './src/components/Main';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import AuthorizationStorage  from './src/utils/authStorage'

const authStorage = new AuthorizationStorage('authorization');
const apolloClient = createApolloClient(authStorage)

export default function App() {

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
};