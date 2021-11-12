/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';

const Header = ({title, type, onPress}) => {
  if (type === 'text') {
    return <Text style={styles.title01}>{title}</Text>;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <IconBack />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.text.black,
    fontFamily: fonts.primary[500],
    fontSize: 16,
    marginLeft: 12,
  },
  title01: {
    color: colors.text.black,
    fontFamily: fonts.primary[500],
    fontSize: 16,
  },
});
