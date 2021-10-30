/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';

const History = () => {
  return (
    <View style={styles.page}>
      <Text>History</Text>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
  },
});
