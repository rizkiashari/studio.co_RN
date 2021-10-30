/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Slogan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Studio.co</Text>
      <Text style={styles.subTitle}>#Booking studio dengan Studio.co</Text>
    </View>
  );
};

export default Slogan;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 36,
    textAlign: 'center',
    color: colors.text.black,
  },
  subTitle: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
