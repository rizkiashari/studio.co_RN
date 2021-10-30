/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  PaymentBerhasil,
  SignIn,
  SignUp,
  Splash,
  WelcomePageStart,
  WelcomeProtokol,
} from '../pages';
import WelcomeUang from '../pages/WelcomeUang';
import GetStarted from '../pages/GetStarted';
import PaymentCancel from '../pages/PaymentCancel';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="PaymentBerhasil">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
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
      <Stack.Screen
        name="WelcomeUang"
        component={WelcomeUang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentBerhasil"
        component={PaymentBerhasil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentCancel"
        component={PaymentCancel}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
