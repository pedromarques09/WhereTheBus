import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './src/navigation/AppNavigator';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

library.add(fas, faMagnifyingGlass);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
