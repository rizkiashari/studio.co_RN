/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';

const HistoryItems = ({date, image, nameStudio, start, end}) => {
  return (
    <View>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.wrapperContent}>
        <Image source={image} style={styles.image} />
        <View style={styles.descWrapper}>
          <View style={styles.desc}>
            <Text style={styles.title} numberOflines={1}>
              {nameStudio}
            </Text>
            <Text style={styles.start}>Start: {start}</Text>
          </View>
          <View style={styles.btnDetail}>
            <View style={styles.detail}>
              <Button type="detail" title="Details" />
            </View>
            <Text style={styles.start}>End: {end}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryItems;

const styles = StyleSheet.create({
  date: {
    color: colors.text.grey1,
    fontFamily: fonts.primary[500],
    fontSize: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  wrapperContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  descWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  title: {
    fontFamily: fonts.primary[500],
    color: colors.black,
    fontSize: 16,
    flex: 0.5,
    flexWrap: 'wrap',
  },
  start: {
    fontFamily: fonts.primary[400],
    color: colors.black,
    fontSize: 12,
  },
  desc: {
    width: '55%',
  },
  btnDetail: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  detail: {
    flex: 0.5,
  },
});
