import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';
import {IconLocation, IconLove, IconRating} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Contents = () => {
  return (
    <>
      <View style={styles.wrapperJudul}>
        <Text style={styles.title}>Studio White Luxe</Text>
        <View style={styles.wrapperRate}>
          <IconRating />
          <Text style={styles.textRate}>5.0</Text>
          <IconLove />
        </View>
      </View>
      <Gap height={4} />
      <View style={styles.wrapperLocation}>
        <View style={{marginTop: 4}}>
          <IconLocation />
        </View>
        <Text style={styles.textLocation}>
          Jl. Raya Ciputat No.1, Ciputat, Tangerang Selatan, Banten 15115
        </Text>
      </View>
      <Gap height={6} />
      <Text style={styles.textWaktu}>Waktu Operasi Studio</Text>
      <Gap height={4} />
      <View style={styles.wrapperWaktu}>
        <Text style={styles.textHari}>Senin - Jumat</Text>
        <Text style={styles.textHari}>08.00 - 18.00</Text>
      </View>
      <Gap height={16} />
      <Text style={styles.textWaktu}>Deskripsi</Text>
      <Gap height={4} />
      <Text style={styles.desc}>
        White Luxe Studio is a boutique photo studio located on the north side
        of Jakarta, providing studio spaces, equipment hire, set-build for
        photographic shoots, filming and events
      </Text>
    </>
  );
};

export default Contents;

const styles = StyleSheet.create({
  wrapperJudul: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  wrapperRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRate: {
    color: colors.text.black,
    marginLeft: 4,
    fontSize: 13,
    marginRight: 12,
  },
  wrapperLocation: {
    flexDirection: 'row',
  },
  textLocation: {
    fontSize: 13,
    color: colors.text.grey1,
    marginLeft: 5,
    lineHeight: 20,
    fontFamily: fonts.primary[500],
  },
  textWaktu: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  wrapperWaktu: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 190,
    justifyContent: 'space-between',
  },
  textHari: {
    fontSize: 11,
    color: colors.text.black,
    fontFamily: fonts.primary[500],
  },
  desc: {
    fontSize: 12,
    color: colors.text.grey1,
    fontFamily: fonts.primary[400],
    lineHeight: 18,
  },
});
