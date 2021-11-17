/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILStart} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const WelcomePageStart = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Slogan />
        <Gap height={100} />
        <View>
          <IlustrationWelcome
            image={ILStart}
            height={184}
            width={277}
            subTitle="Booking Studio dengan aman, tidak perlu takut privasi anda terganggu"
            title="Mulai Memesan Studio Fotografi"
          />
        </View>
        <Gap height={118} />
      </View>
      <View style={styles.btnNext}>
        <Gap width={100} />
        <Button
          border={30}
          width={108}
          title="Next"
          onPress={() => navigation.replace('WelcomeProtokol')}
        />
        <Gap width={80} />
      </View>
    </View>
  );
};

export default WelcomePageStart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  btnNext: {
    flexDirection: 'row',
  },
});
