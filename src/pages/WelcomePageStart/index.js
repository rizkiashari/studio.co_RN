/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILStart} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const WelcomePageStart = ({navigation}) => {
  // console.log('navigation: ', navigation);
  return (
    <View style={styles.page}>
      <View>
        <Gap height={44} />
        <Slogan />
        <Gap height={100} />
        <View>
          <IlustrationWelcome
            image={ILStart}
            subTitle="Booking Studio dengan aman, tidak perlu takut privasi anda terganggu"
            title="Mulai Memesan Studio Fotografi"
          />
        </View>
        <Gap height={118} />
      </View>
      <Button
        border="next/skip"
        title="Next"
        type="primary"
        onPress={() => navigation.navigate('WelcomeProtokol')}
      />
    </View>
  );
};

export default WelcomePageStart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
