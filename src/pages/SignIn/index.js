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

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Gap height={70} />
          <Slogan />
          <Gap height={82} />
        </View>
        <Text style={styles.title}>Sign In</Text>
        <View>
          <Gap height={20} />
          <Input placeholder="Email" type="email" />
          <Gap height={16} />
          <Input placeholder="Password" type="password" />
          <Gap height={4} />
          <TouchableOpacity>
            <Text style={styles.forgot}>Lupa Password?</Text>
          </TouchableOpacity>
          <Gap height={45} />
          <Button title="Sign In" type="primary" border={5} />
          <Gap height={16} />
          <View style={styles.wrapperSignIn}>
            <Text style={styles.text}>Sudah punya akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.textSignin}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

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
  wrapperSignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 0.45,
    fontFamily: fonts.primary[400],
    color: colors.text.black,
  },
  textSignin: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  forgot: {
    textAlign: 'right',
    fontFamily: fonts.primary[400],
    fontSize: 12,
    paddingVertical: 5,
    color: colors.text.primary,
    textDecorationLine: 'underline',
  },
});
