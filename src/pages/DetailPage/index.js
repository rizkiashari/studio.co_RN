import React from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import {Dummy_3} from '../../assets';
import {
  Button,
  DetailPembayaran,
  DetailPemesanan,
  Gap,
  Header,
  StudioItem,
} from '../../components';
import {colors, fonts} from '../../utils';

const DetailPage = () => {
  return (
    <View style={styles.page}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={28} />
          <Header title="Detail" />
          <Gap height={32} />
          <Text style={styles.title}>Upcoming</Text>
          <Gap height={12} />
          <Image source={Dummy_3} style={styles.image} />
          <Gap height={20} />
          <StudioItem />
          <Gap height={20} />
          <DetailPemesanan />
          <Gap height={18} />
          <DetailPembayaran type="bayar" />
          <Gap height={30} />
          <Button type="batal" title="Batalkan Pemesanan" />
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.black,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 174,
    objectFit: 'cover',
    borderRadius: 24 / 2,
  },
});
