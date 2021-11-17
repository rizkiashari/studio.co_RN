/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';

const PageDetailPerlengkapan = () => {
  return (
    <View style={styles.page}>
      <Text>Hello</Text>
    </View>
  );
};

export default PageDetailPerlengkapan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
