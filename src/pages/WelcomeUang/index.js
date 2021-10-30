/* eslint-disable prettier/prettier */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ILUangTerjamin} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const WelcomeUang = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View>
          <Gap height={44} />
          <Slogan />
          <Gap height={70} />
          <View>
            <IlustrationWelcome
              image={ILUangTerjamin}
              width={250}
              height={227}
              subTitle="Sistem Pengembalian Uang Sangat terjamin"
              title="Pengembalian Uang Terjamin"
            />
          </View>
          <Gap height={110} />
        </View>
        <View style={styles.wrapper}>
          <Button
            border="next/skip"
            title="Skip"
            type="secondary"
            onPress={() => navigation.replace('Home')}
          />
          <Gap width={104} />
          <Button
            border="next/skip"
            title="Next"
            type="primary"
            onPress={() => navigation.replace('GetStarted')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeUang;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
