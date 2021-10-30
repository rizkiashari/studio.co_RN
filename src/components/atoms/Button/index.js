/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Button = ({title, onPress, type, border}) => {
  return (
    <TouchableOpacity style={styles.container(type, border)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type, border) => ({
    backgroundColor: type === 'primary' ? colors.primary : colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: border === 'next/skip' ? 30 : 5,
    width: border === 'next/skip' ? 108 : '100%',
    height: 44,
  }),
  text: type => ({
    color: type === 'primary' ? colors.text.white : colors.text.grey3,
    fontFamily: fonts.primary[500],
    fontSize: 16,
  }),
});
