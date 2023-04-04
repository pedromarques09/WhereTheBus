import React, { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import LotacaoTracking from "../screens/LotacaoTracking";
import ApiDataList from "../screens/ApiDataList";

export type RootStackParamList = {
  Home: undefined;
  ApiDataList: { url: string; title: string };
  LotacaoTracking: { id: string };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
export type ApiDataListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ApiDataList"
>;
export type LotacaoTrackingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "LotacaoTracking"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ApiDataList" component={ApiDataList} />
      <Stack.Screen name="LotacaoTracking" component={LotacaoTracking} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
