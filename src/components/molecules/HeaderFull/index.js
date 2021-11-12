import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconBackWhite, IconMessage, IconNotification} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HeaderFull = ({onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.btnBack} onPress={onPress}>
        <IconBackWhite />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Studio.co</Text>
        <Text style={styles.desc}>#Awali hari dengan Studio.co</Text>
      </View>
      <View style={styles.wrapperNotif}>
        <IconMessage />
        <IconNotification />
      </View>
    </View>
  );
};

export default HeaderFull;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnBack: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding: 8,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: colors.text.black,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.black,
  },
  wrapperNotif: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.3,
  },
});
