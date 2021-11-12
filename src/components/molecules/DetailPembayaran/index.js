import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const DetailPembayaran = ({type}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Detail Pembayaran</Text>
      <Gap height={12} />
      {type === 'bayar' && (
        <>
          <View style={styles.wrapperContent}>
            <Text style={styles.titleBayar}>Metode Pembayaran</Text>
            <Text style={styles.typeBayar}>Gopay</Text>
          </View>
          <Gap height={20} />
        </>
      )}
      <View style={styles.wrapperContent}>
        <Text style={styles.titleBayar}>Rp. 1.000.000,-/3 jam x 1</Text>
        <Text style={styles.titleBayar}>Rp. 1.000.000,-</Text>
      </View>
      <Gap height={8} />
      <View style={styles.wrapperContent}>
        <Text style={styles.titleBayar}>Pajak</Text>
        <Text style={styles.titleBayar}>Rp. 300.000,-</Text>
      </View>
      <Gap height={24} />
      <View style={styles.wrapperContent}>
        <Text style={styles.titleTotal}>Total</Text>
        <Text style={styles.harga}>Rp. 1.300.000,-</Text>
      </View>
    </View>
  );
};

export default DetailPembayaran;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  wrapperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleBayar: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.black,
  },
  typeBayar: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  titleTotal: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.black,
  },
  harga: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.black,
  },
});
