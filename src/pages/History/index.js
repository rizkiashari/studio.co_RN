/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Dummy_3, Dummy_4} from '../../assets';
import {Gap, Header, HistoryItems} from '../../components';
import {colors, fonts} from '../../utils';

const History = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={18} />
        <Header type="text" title="History" />
        <Gap height={18} />
        <Text style={styles.title}>Upcoming</Text>
        <Gap height={8} />
        <HistoryItems
          date="Kamis, 22 April 2021"
          image={Dummy_3}
          nameStudio="Studio Ilustrasi"
          start="09:00 P.M"
          end="12:00 P.M"
        />
        <Gap height={24} />
        <Text style={styles.title}>Post Booking</Text>
        <Gap height={8} />
        <HistoryItems
          date="Senin, 17 Agustus 2021"
          image={Dummy_4}
          nameStudio="Studio Ilustrasi"
          start="09:00 P.M"
          end="12:00 P.M"
        />
      </ScrollView>
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
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.black,
  },
});
