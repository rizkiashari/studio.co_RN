/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILCancel} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const PaymentCancel = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={ILCancel} style={styles.image} />
        <Gap height={20} />
        <Text style={styles.title}>Pembalatan Berhasil!</Text>
        <Gap height={4} />
        <Text style={styles.subTitle}>
          Pembatalan Pesanan Studiomu telah berhasil
        </Text>
        <Gap height={28} />
        <Button title="Home" type="primary" width={384} border={5} />
      </View>
    </View>
  );
};

export default PaymentCancel;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 360,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.black,
    marginTop: 28,
    textAlign: 'center',
  },
});
