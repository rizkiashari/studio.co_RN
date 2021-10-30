/* eslint-disable prettier/prettier */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ILStart} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const WelcomePageStart = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View>
          <Gap height={44} />
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
        <Button
          border="next/skip"
          title="Next"
          type="primary"
          onPress={() => navigation.replace('WelcomeProtokol')}
        />
      </ScrollView>
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
