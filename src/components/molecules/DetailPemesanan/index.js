import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const DetailPemesanan = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Detail Pemesanan</Text>
      <Gap height={16} />
      <View style={styles.wrapperTanggal}>
        <Text style={styles.dateTitle}>Tanggal</Text>
        <Text style={styles.detail}>22 April 2021</Text>
      </View>
      <Gap height={16} />
      <View style={styles.wrapperTanggal}>
        <Text style={styles.dateTitle}>Waktu</Text>
        <Text style={styles.detail}>08.00 - 12.00</Text>
      </View>
    </View>
  );
};

export default DetailPemesanan;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: colors.border03,
    borderBottomColor: colors.border03,
  },
  title: {
    fontFamily: fonts.primary[500],
    color: colors.text.black,
    fontSize: 14,
  },
  wrapperTanggal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.black,
  },
  detail: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.text.black,
  },
});
