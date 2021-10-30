/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHistoryActive,
  IconHistoryUnactive,
  IconHomeActive,
  IconHomeUnactive,
  IconProfileActive,
  IconProfileUnactive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHomeUnactive />;
    }
    if (title === 'History') {
      return active ? <IconHistoryActive /> : <IconHistoryUnactive />;
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfileUnactive />;
    }

    return <IconHomeActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 12,
    color: active ? colors.text.menuActive : colors.text.menuInActive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
