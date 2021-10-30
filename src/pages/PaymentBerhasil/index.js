/* eslint-disable prettier/prettier */

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILSuccess} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const PaymentBerhasil = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={ILSuccess} style={styles.image} />
        <Gap height={20} />
        <Text style={styles.title}>Transaksi Berhasil!</Text>
        <Gap height={4} />
        <Text style={styles.subTitle}>
          Jangan lupa menunjukkan
          <Text style={styles.isi}> bukti pembayaran</Text> untuk check in
          kepada pihak studio.
        </Text>
        <Gap height={8} />
        <Text style={styles.subTitle01}>
          Dapat diakses pada menu history -> detail
        </Text>
        <Gap height={28} />
        <Button title="Home" type="primary" width={384} border={5} />
      </View>
    </View>
  );
};

export default PaymentBerhasil;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 290,
    height: 260,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.black,
    marginTop: 28,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.grey1,
    textAlign: 'center',
    width: 243,
    lineHeight: 16,
  },
  subTitle01: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.grey1,
    textAlign: 'center',
  },
  isi: {
    lineHeight: 20,
    fontFamily: fonts.primary[600],
  },
});
