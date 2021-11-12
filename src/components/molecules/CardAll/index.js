import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {
  Dummy_2,
  IconLocation,
  IconLove,
  IconRating,
  IconUnLove,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardAll = ({love, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperImage}>
        <Image source={Dummy_2} style={styles.image} />
        <TouchableOpacity style={styles.wrapperLove} onPress={onPress}>
          {love ? <IconLove /> : <IconUnLove />}
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperText}>
          <Text style={styles.title}>Studio White Lux</Text>
          <IconRating />
          <Text style={styles.textRating}>5.0 (70)</Text>
        </View>
        <View style={styles.wrapperLocation}>
          <IconLocation />
          <Text style={styles.textLocation}>Jl. Pluit Timur</Text>
        </View>
        <View style={styles.wrapperPrice}>
          <Text style={styles.mulai}>Mulai dari </Text>
          <Text style={styles.textPrice}>Rp 450.000,-/3 jam</Text>
        </View>
      </View>
    </View>
  );
};

export default CardAll;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperImage: {
    position: 'relative',
    flexDirection: 'row',
  },
  image: {
    width: 130,
    height: 90,
    borderRadius: 10,
  },
  wrapperLove: {
    position: 'absolute',
    right: 0,
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  wrapperContent: {
    flex: 2,
    marginLeft: 20,
  },
  wrapperText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: colors.text.black,
    fontFamily: fonts.primary[500],
  },
  textRating: {
    fontSize: 11,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  wrapperLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  textLocation: {
    fontSize: 11,
    fontFamily: fonts.primary[500],
    marginLeft: 8,
    color: colors.text.grey1,
  },
  wrapperPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mulai: {
    fontSize: 11,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  textPrice: {
    fontSize: 13,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
});
