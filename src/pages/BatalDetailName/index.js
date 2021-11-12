import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Button, Gap, Header, InputDetail} from '../../components';
import {colors, fonts} from '../../utils';

const BatalDetailName = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={28} />
          <Header
            title="Pembatalan Pesanan"
            onPress={() => navigation.goBack()}
          />
          <Gap height={24} />
          <InputDetail label="Nama Pemilik Rekening" />
          <Gap height={16} />
          <InputDetail label="No. Rekening" number="numeric" />
          <Gap height={16} />
          <InputDetail label="Bank" />
          <Gap height={16} />
          <InputDetail label="Alasan Pembatalan" />
          <Gap height={16} />
          <Text style={styles.label}>Jumlah Refund</Text>
          <Gap height={10} />
          <View style={styles.wrapperLabel}>
            <View style={styles.batch}></View>
            <Text style={styles.total}>Rp 1.300.000</Text>
          </View>
          <Gap height={40} />
          <Button type="batal" title="Batalkan Pemesanan" />
        </ScrollView>
      </View>
    </View>
  );
};

export default BatalDetailName;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
  },
  label: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.black,
  },
  wrapperLabel: {
    flexDirection: 'row',
  },
  batch: {
    width: 15,
    height: 50,
    backgroundColor: colors.primary,
  },
  total: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    color: colors.text.black,
    fontFamily: fonts.primary[500],
    backgroundColor: colors.ternatry,
  },
});
