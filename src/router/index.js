/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WelcomePageStart, WelcomeProtokol} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomePageStart">
      <Stack.Screen
        name="WelcomeProtokol"
        component={WelcomeProtokol}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomePageStart"
        component={WelcomePageStart}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
