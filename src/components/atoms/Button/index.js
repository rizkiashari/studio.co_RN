/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconFavorite, IconPopuler, IconTerdekat} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Button = ({title, onPress, type, border, width, icon, active}) => {
  if (type === 'logout') {
    return (
      <TouchableOpacity style={styles.wrapperLogout} onPress={onPress}>
        <Text style={styles.btnLogout}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'perlengkapan') {
    return (
      <View style={styles.wrapperPerlengkapan}>
        <Text style={styles.titlePerlengkapan}>{title}</Text>
      </View>
    );
  }

  if (type === 'contentDetail') {
    return (
      <TouchableOpacity style={styles.content(active)} onPress={onPress}>
        <Text style={styles.btnContent(active)}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'btnMenu') {
    return (
      <TouchableOpacity style={styles.btnMenu(active)} onPress={onPress}>
        {icon === 'favorite' && <IconFavorite />}
        {icon === 'populer' && <IconPopuler />}
        {icon === 'terdekat' && <IconTerdekat />}
        <Text style={styles.btnMenuText(active)}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'detail') {
    return (
      <TouchableOpacity style={styles.wrapperDetail} onPress={onPress}>
        <Text style={styles.btnDetail}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'batal') {
    return (
      <TouchableOpacity style={styles.wraperbatal} onPress={onPress}>
        <Text style={styles.btnBatal}>{title}</Text>
      </TouchableOpacity>
    );
  }

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
  btnLogout: {
    color: colors.button.ternary.text,
    backgroundColor: colors.button.ternary.background,
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  wrapperLogout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperDetail: {
    width: 35,
    borderBottomWidth: 1,
    borderColor: colors.black,
    marginBottom: 18,
  },
  btnDetail: {
    color: colors.black,
    fontFamily: fonts.primary[400],
    fontSize: 10,
    marginBottom: -5,
  },
  wraperbatal: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.borderRed,
    paddingVertical: 8,
    paddingHorizontal: 70,
    borderRadius: 5,
  },
  btnBatal: {
    textAlign: 'center',
    color: colors.button.ternary.text,
    fontSize: 16,
    fontFamily: fonts.primary[500],
  },
  btnMenu: active => ({
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: active ? 0 : 2,
    borderRadius: 10,
    width: 75,
    height: 80,
    backgroundColor: active ? colors.primary : colors.white,
  }),
  btnMenuText: active => ({
    color: active ? colors.text.white : colors.text.grey3,
    marginTop: 10,
    fontSize: 12,
    fontFamily: active ? fonts.primary[500] : fonts.primary[400],
  }),
  content: active => ({
    backgroundColor: active
      ? colors.button.primary.background
      : colors.button.secondary.background,
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 5,
    fontFamily: fonts.primary[400],
  }),
  btnContent: active => ({
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: active ? colors.button.primary.text : colors.button.secondary.black,
  }),
  wrapperPerlengkapan: {
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 4,
    marginRight: 4,
  },
  titlePerlengkapan: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.white,
  },
});
