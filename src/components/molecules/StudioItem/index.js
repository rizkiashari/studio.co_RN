import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';
import {IconLocation, IconPopuler} from '../../../assets';
import {colors, fonts} from '../../../utils';

const StudioItem = ({name, location, rating, viewer}) => {
  return (
    <View style={styles.wrapperStudio}>
      <View style={styles.studio}>
        <Text style={styles.titleStudio}>Studio Ilustrasi</Text>
        <Gap height={8} />
        <View style={styles.location}>
          <IconLocation />
          <Text style={styles.text}>Jl. Kebon Kacang</Text>
        </View>
      </View>
      <View>
        <View style={styles.rating}>
          <IconPopuler />
          <Text style={styles.textRating}>4.5 (270)</Text>
        </View>
      </View>
    </View>
  );
};

export default StudioItem;

const styles = StyleSheet.create({
  wrapperStudio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  studio: {
    alignItems: 'flex-start',
  },
  titleStudio: {
    fontSize: 20,
    color: colors.text.black,
    fontFamily: fonts.primary[600],
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.text.grey1,
    fontSize: 12,
    fontFamily: fonts.primary[500],
    marginLeft: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRating: {
    color: colors.text.black,
    fontSize: 12,
    fontFamily: fonts.primary[500],
    marginLeft: 4,
  },
});
