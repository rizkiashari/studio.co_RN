/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const detailPerlengkapan = [
  {title: 'Lighting'},
  {title: 'Backdrop'},
  {title: 'Properties'},
  {title: 'Tripod'},
  {title: 'Flash'},
  {title: 'Reflector'},
];

const allContent = [
  {
    title: 'Fasilitas Studio',
    content: [
      {wifi: 'Wifi'},
      {wifi: 'Toilet'},
      {wifi: 'Ruang Ganti'},
      {wifi: 'Pendingin Ruangan'},
      {wifi: 'Makeup Area'},
      {wifi: 'Steamers'},
      {wifi: 'Assistants'},
    ],
  },
  {
    title: 'Peraturan Studio',
    content: [
      {wifi: 'Tidak boleh merokok pada saat indoor.'},
      {wifi: 'Tidak boleh membawa senjata tajam.'},
      {wifi: 'Tidak boleh membawa obat-obatan terlarang.'},
    ],
  },
  {
    title: 'Penerapan Protokol Kesehatan',
    content: [
      {wifi: 'Memakai Masker.'},
      {wifi: 'Mencuci Tangan dengan Air Mengalir Menggunakan Sabun.'},
      {wifi: 'Menjaga Jarak.'},
      {wifi: 'Menghindari Kerumunan: Kapasitas Studio Max 50 Orang.'},
    ],
  },
];

const DetailContents = ({navigation}) => {
  return (
    <View style={styles.wrappper}>
      <Text style={styles.title}>Alamat</Text>
      <Gap height={8} />
      <Text style={styles.address}>Jl. Pluit Timur Blok L Timur No.24</Text>
      <Text style={styles.address}>PIK Avenue: Level 6 (Uspace)</Text>
      <Gap height={36} />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>Perlengkapan:</Text>
        <TouchableOpacity
          style={styles.btnDetail}
          onPress={() => navigation.navigate('DetailPerlengkapanPage')}>
          <Text style={styles.btnTitle}>Lihat detail</Text>
        </TouchableOpacity>
      </View>
      <Gap height={12} />
      <View style={styles.wrapperBtn}>
        {detailPerlengkapan.map((item, index) => (
          <Button type="perlengkapan" key={index} title={item.title} />
        ))}
      </View>
      <Gap height={30} />
      {allContent.map((item, index) => (
        <>
          <Text style={styles.title} key={index}>
            {item.title}
          </Text>
          <Gap height={8} />
          {item.content.map((item2, idx) => (
            <>
              <View key={idx} style={styles.wrapperContentAll}>
                <Text style={styles.text}>{idx + 1}</Text>
                <Gap width={8} />
                <Text style={styles.text}>{item2.wifi}</Text>
              </View>
            </>
          ))}
          <Gap height={36} />
        </>
      ))}
    </View>
  );
};

export default DetailContents;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  address: {
    fontSize: 11,
    color: colors.text.black,
    fontFamily: fonts.primary[400],
  },
  wrapperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnTitle: {
    color: colors.primary,
    fontSize: 9,
    fontFamily: fonts.primary[400],
  },
  btnDetail: {
    borderBottomWidth: 1,
    borderColor: colors.primary,
  },
  wrapperBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  wrapperContentAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.text.black,
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
  },
});
