/* eslint-disable prettier/prettier */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ILUangTerjamin} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const WelcomeUang = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content01}>
        <Slogan />
        <Gap height={60} />
        <IlustrationWelcome
          image={ILUangTerjamin}
          width={250}
          height={227}
          subTitle="Sistem Pengembalian Uang Sangat terjamin"
          title="Pengembalian Uang Terjamin"
        />
      </View>
      <View style={styles.wrapper}>
        <Button
          border={30}
          width={108}
          title="Skip"
          type="secondary"
          onPress={() => navigation.replace('Home')}
        />
        <Gap width={104} />
        <Button
          border={30}
          width={108}
          title="Next"
          type="primary"
          onPress={() => navigation.replace('GetStarted')}
        />
      </View>
    </View>
  );
};

export default WelcomeUang;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
