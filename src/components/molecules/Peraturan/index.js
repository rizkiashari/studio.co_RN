import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const Peraturan = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Ketentuan Pembatalan</Text>
      <Gap height={8} />
      <View style={styles.content}>
        <Text style={styles.number}>1. </Text>
        <Text style={styles.text}>
          Gratis biaya pembatalan pemesanan sampai 20 April 2021 13:01.
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.number}>2. </Text>
        <Text style={styles.text}>
          Biaya pembatalan dikenakan sebesar 390.000 jika pembatalan pemesanan
          setelah 20 April 2021 13:01.
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.number}>3. </Text>
        <Text style={styles.text}>
          Pemesanan tidak dapat dibatalkan setelah 22 April 2021 23.59.
        </Text>
      </View>
    </View>
  );
};

export default Peraturan;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  content: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  text: {
    lineHeight: 18,
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.black,
  },
  number: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.black,
  },
});
