/* eslint-disable prettier/prettier */

import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Logo} from '../../assets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomePageStart');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <Image source={Logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
