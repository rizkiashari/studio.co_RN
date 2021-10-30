/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ProfileContent = ({judul, deskripsi}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>{judul}</Text>
      <Text style={styles.deskripsi}>{deskripsi}</Text>
    </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border02,
    paddingBottom: 5,
  },
  judul: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
    marginBottom: 5,
  },
  deskripsi: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
});
