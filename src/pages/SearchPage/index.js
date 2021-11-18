/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {CardAll, Gap, Header, Search} from '../../components';
import {colors} from '../../utils';

const SearchPage = () => {
  return (
    <View style={styles.page}>
      <Header title="Pencarian" />
      <Gap height={40} />
      <Search type="search" />
      <Gap height={28} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardAll />
      </ScrollView>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
