/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, CardAll, Gap, HeaderFull, Search} from '../../components';
import {colors, fonts} from '../../utils';

const HomeStart = ({navigation}) => {
  const [isPopuler, setIsPopuler] = useState(true);
  const [isTerdekat, setIsTerdekat] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const [fav, setFav] = useState();

  const handlePopuler = () => {
    setIsPopuler(true);
    setIsTerdekat(false);
    setIsFavorite(false);
  };

  const handleTerdekat = () => {
    setIsPopuler(false);
    setIsTerdekat(true);
    setIsFavorite(false);
  };

  const handleFavorite = () => {
    setIsPopuler(false);
    setIsTerdekat(false);
    setIsFavorite(true);
  };

  const favorite = () => {
    setFav(!fav);
  };

  return (
    <View style={styles.page}>
      <HeaderFull onPress={() => navigation.goBack()} />
      <Gap height={24} />
      <Search onPress={() => navigation.navigate('SearchPage')} />
      <Gap height={32} />
      <View style={styles.wrapperBtn}>
        <Button
          type="btnMenu"
          icon="terdekat"
          active={isTerdekat}
          onPress={handleTerdekat}
          title="Terdekat"
        />
        <Gap width={28} />
        <Button
          type="btnMenu"
          icon="populer"
          onPress={handlePopuler}
          active={isPopuler}
          title="Populer"
        />
        <Gap width={28} />
        <Button
          type="btnMenu"
          icon="favorite"
          active={isFavorite}
          onPress={handleFavorite}
          title="Favorit"
        />
      </View>
      <Gap height={40} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {isPopuler && (
          <>
            <Text style={styles.title}>Studio Populer</Text>
            <Gap height={18} />
            <CardAll onPress={favorite} love={fav} />
          </>
        )}
        {isFavorite && (
          <>
            <Text style={styles.title}>Studio Favorite</Text>
            <Gap height={18} />
            <CardAll onPress={favorite} love={fav} />
          </>
        )}
        {isTerdekat && (
          <>
            <Text style={styles.title}>Studio Terdekat</Text>
            <Gap height={18} />
            <CardAll onPress={favorite} love={fav} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeStart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.black,
  },
});
