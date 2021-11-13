import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap} from '../../atoms';
import {
  IconBackWhite,
  IconMessage,
  IconMessageWhite,
  IconNotification,
  IconNotificationWhite,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HeaderFull = ({onPress, type}) => {
  return (
    <View style={styles.wrapper}>
      {type === 'tanpa__text' ? (
        <TouchableOpacity style={styles.btnBack01} onPress={onPress}>
          <IconBackWhite />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btnBack} onPress={onPress}>
          <IconBackWhite />
        </TouchableOpacity>
      )}
      <View style={styles.content}>
        {type === 'tanpa__text' ? (
          <Gap width={100} />
        ) : (
          <>
            <Text style={styles.title}>Studio.co</Text>
            <Text style={styles.desc}>#Awali hari dengan Studio.co</Text>
          </>
        )}
      </View>
      {type === 'tanpa__text' ? (
        <View style={styles.wrapperNotifWhite}>
          <View style={styles.iconMessage}>
            <IconMessageWhite />
          </View>
          <View style={styles.iconMessage}>
            <IconNotificationWhite />
          </View>
        </View>
      ) : (
        <View style={styles.wrapperNotif}>
          <>
            <IconMessage />
            <IconNotification />
          </>
        </View>
      )}
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
  btnBack01: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding: 8,
    marginLeft: 15,
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
  wrapperNotifWhite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.26,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  iconMessage: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding: 4.5,
    alignItems: 'center',
  },
});
