/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILEnd} from '../../assets';
import {Button, Gap, IlustrationWelcome, Slogan} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Gap height={44} />
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
        <Gap height={118} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
