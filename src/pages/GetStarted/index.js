/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILEnd} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Slogan />
        <Gap height={100} />
        <View>
          <IlustrationWelcome
            image={ILEnd}
            height={184}
            width={277}
            title="Mulai Mencari Studio Terbaik"
          />
        </View>
      </View>
      <View>
        <Button
          title="Get Started"
          type="primary"
          width={135}
          border={30}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
});
