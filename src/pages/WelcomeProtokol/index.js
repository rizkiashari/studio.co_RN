/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ILProtokol} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const WelcomeProtokol = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View>
          <Gap height={44} />
          <Slogan />
          <Gap height={74} />
          <View>
            <IlustrationWelcome
              image={ILProtokol}
              width={266}
              height={243}
              subTitle="Protokol kesehatan yang sudah terstandar WHO"
              title="Protokol Kesehatan"
            />
          </View>
          <Gap height={118} />
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
            onPress={() => navigation.replace('WelcomeUang')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeProtokol;

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
