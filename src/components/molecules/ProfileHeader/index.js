/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser, IconCamera} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Gap height={36} />
        <Image source={DummyUser} style={styles.image} />
        <View style={styles.camera}>
          <IconCamera />
        </View>
      </View>
      <Text style={styles.title}>Hi Fannisa!</Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  camera: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.black,
    marginTop: 8,
  },
});
