require('react-native').unstable_enableLogBox();

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
