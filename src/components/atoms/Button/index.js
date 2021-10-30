/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Button = ({title, onPress, type, border, width}) => {
  return (
    <TouchableOpacity
      style={styles.container(type, border, width)}
      onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type, border, width) => ({
    backgroundColor: type === 'primary' ? colors.primary : colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: border,
    width: width,
    height: 44,
  }),
  text: type => ({
    color: type === 'primary' ? colors.text.white : colors.text.grey3,
    fontFamily: fonts.primary[500],
    fontSize: 16,
  }),
});
