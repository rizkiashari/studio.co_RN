/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardHome = ({color, colorText, text, gambar, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper(color)} onPress={onPress}>
      <View style={styles.wraperContent}>
        <Image source={gambar} style={styles.image} />
        <Text style={styles.text(colorText)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  wrapper: color => ({
    borderRadius: 10,
    width: '100%',
    height: 132,
    backgroundColor: color,
    paddingHorizontal: 25,
    paddingVertical: 30,
  }),
  wraperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    paddingVertical: 20,
    width: 122,
    height: 90,
  },
  text: colorText => ({
    color: colorText ? colorText : colors.black,
    fontSize: 14,
    fontFamily: fonts.primary[500],
    width: '50%',
    textAlign: 'center',
  }),
});
