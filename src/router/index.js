/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BatalDetailName,
  DetailPage,
  DetailStudio,
  GetStarted,
  History,
  Home,
  HomeStart,
  PageDetailPerlengkapan,
  PaymentBerhasil,
  PaymentCancel,
  PembatalanPesan,
  Profile,
  SearchPage,
  SignIn,
  SignUp,
  Splash,
  WelcomePageStart,
  WelcomeProtokol,
  WelcomeUang,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="DetailPerlengkapanPage">
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPerlengkapanPage"
        component={PageDetailPerlengkapan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailStudio"
        component={DetailStudio}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeStart"
        component={HomeStart}
        options={{headerShown: false}}
      />
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
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
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
      <Stack.Screen
        name="PagePembatalan"
        component={PembatalanPesan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PageBatalDetail"
        component={BatalDetailName}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
