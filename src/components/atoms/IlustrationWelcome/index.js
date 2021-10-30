/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const IlustrationWelcome = ({image, title, subTitle, height, width}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.ilustration(width, height)} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default IlustrationWelcome;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ilustration: (width, height) => ({
    width: width,
    height: height,
  }),
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.text.black,
    marginTop: 37,
  },
  subTitle: {
    fontSize: 11,
    fontFamily: fonts.primary[500],
    marginTop: 4,
    color: colors.text.secondary,
    width: 235,
    textAlign: 'center',
    lineHeight: 20,
  },
});
