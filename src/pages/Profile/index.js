/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap} from '../../components';
import {ProfileContent, ProfileHeader} from '../../components/molecules';
import {colors} from '../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        <ProfileContent judul="Nama" deskripsi="Fannisa" />
        <Gap height={16} />
        <ProfileContent judul="Nomor Hp" deskripsi="(+62)8-125000002" />
        <Gap height={16} />
        <ProfileContent judul="Email" deskripsi="fannisa@gmail.com" />
        <Gap height={16} />
        <ProfileContent judul="Ubah Password" deskripsi="" />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
  },
});
