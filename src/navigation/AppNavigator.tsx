import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import LotacaoTracking from '../screens/LotacaoTracking';
import ApiDataList from '../screens/ApiDataList';

const {Navigator, Screen} = createStackNavigator();
const AppNavigator: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="ApiDataList" component={ApiDataList} />
      <Screen name="LotacaoTracking" component={LotacaoTracking} />
    </Navigator>
  );
};
export default AppNavigator;
