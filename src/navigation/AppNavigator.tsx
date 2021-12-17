import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BusLine from '../screens/BusLine';
import Home from '../screens/Home';
import Lotacao from '../screens/Lotacao';

const {Navigator, Screen} = createStackNavigator();
const AppNavigator: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="BusLine" component={BusLine} />
      <Screen name="Lotacao" component={Lotacao} />
    </Navigator>
  );
};
export default AppNavigator;
