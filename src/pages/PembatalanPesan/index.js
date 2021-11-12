import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {
  Button,
  DetailPemesanan,
  Gap,
  Header,
  Peraturan,
  StudioItem,
} from '../../components';
import CheckBox from '@react-native-community/checkbox';
import {colors, fonts} from '../../utils';

const PembatalanPesan = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.page}>
      <View>
        <ScrollView>
          <Gap height={28} />
          <Header title="Pembatalan Pesanan" />
          <Gap height={24} />
          <StudioItem />
          <Gap height={20} />
          <DetailPemesanan />
          <Gap height={20} />
          <Peraturan />
          <Gap height={12} />
          <View style={styles.wrapperCheckbox}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.persetujuan}>
              Saya setuju dengan ketentuan diatas
            </Text>
          </View>
          <Gap height={30} />
          <Button type="batal" title="Batalkan Pemesanan" />
        </ScrollView>
      </View>
    </View>
  );
};

export default PembatalanPesan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
  },
  persetujuan: {
    fontSize: 10,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  wrapperCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
