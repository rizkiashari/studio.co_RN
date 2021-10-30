/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Input, Slogan} from '../../components';
import {colors, fonts} from '../../utils';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Gap height={70} />
          <Slogan />
          <Gap height={82} />
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <View>
          <Gap height={20} />
          <Input placeholder="Nama" type="nama" />
          <Gap height={16} />
          <Input placeholder="Email" type="email" />
          <Gap height={16} />
          <Input placeholder="No. Hp" type="telp" number="numeric" />
          <Gap height={16} />
          <Input placeholder="Password" type="password" />
          <Gap height={16} />
          <Input placeholder="Konfirmasi Password" type="password" />
          <Gap height={45} />
          <Button title="Sign In" type="primary" />
          <Gap height={16} />
          <View style={styles.wrapperSignUp}>
            <Text style={styles.text}>Sudah punya akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.textSignup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
    paddingHorizontal: 30,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 24,
    fontFamily: fonts.primary[500],
    color: colors.text.black,
  },
  wrapperSignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 0.45,
    fontFamily: fonts.primary[400],
    color: colors.text.black,
  },
  textSignup: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
