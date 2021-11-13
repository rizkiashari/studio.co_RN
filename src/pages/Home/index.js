import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  ILNoFotografer,
  ILSewaProperti,
  ILYesFotografer,
  ILYesVideoFotografer,
} from '../../assets';
import {CardHome, Gap, Slogan} from '../../components';
import {colors} from '../../utils';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View>
          <Slogan />
          <Gap height={30} />
          <CardHome
            color="#356592"
            colorText="#fff"
            text="Sewa studio foto tanpa fotografer"
            gambar={ILNoFotografer}
          />
          <Gap height={28} />
          <CardHome
            color="#3B8E86"
            colorText="#fff"
            gambar={ILYesFotografer}
            text="Sewa studio dengan fotografer"
          />
          <Gap height={28} />
          <CardHome
            color="#DEF2EF"
            gambar={ILYesVideoFotografer}
            text="Sewa Freelance Fotografer dan Videographer"
          />
          <Gap height={28} />
          <CardHome
            color="#7ACAF0"
            text="Sewa Properti"
            gambar={ILSewaProperti}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
