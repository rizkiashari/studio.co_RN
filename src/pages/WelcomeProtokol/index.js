/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILProtokol} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const WelcomeProtokol = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Slogan />
        <Gap height={60} />
        <View>
          <IlustrationWelcome
            image={ILProtokol}
            width={260}
            height={240}
            subTitle="Protokol kesehatan yang sudah terstandar WHO"
            title="Protokol Kesehatan"
          />
        </View>
      </View>
      <View>
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
            onPress={() => navigation.replace('WelcomeUang')}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeProtokol;

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
