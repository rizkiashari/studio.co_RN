import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {DummyHistory_1, DummyHistory_2} from '../../assets';
import {
  Button,
  Contents,
  DetailContents,
  Gap,
  HeaderFull,
  PaketContents,
  ReviewContents,
} from '../../components';
import {colors, fonts} from '../../utils';

const {width} = Dimensions.get('window');

const DetailStudio = () => {
  const [imageCarousel, setImageCarousel] = useState([
    {id: 1, image: DummyHistory_1},
    {id: 2, image: DummyHistory_2},
    {id: 3, image: DummyHistory_1},
  ]);

  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = indexSelected => {
    setIndexSelected(indexSelected);
  };

  const [detailStudio, setDetailStudio] = useState(true);
  const [paketStudio, setPaketStudio] = useState(false);
  const [ReviewStudio, setReviewStudio] = useState(false);

  const handleDetailStudio = () => {
    setDetailStudio(true);
    setPaketStudio(false);
    setReviewStudio(false);
  };

  const handlePaketStudio = () => {
    setDetailStudio(false);
    setPaketStudio(true);
    setReviewStudio(false);
  };

  const handleReviewStudio = () => {
    setDetailStudio(false);
    setPaketStudio(false);
    setReviewStudio(true);
  };

  return (
    <View style={styles.page}>
      <View style={{width: '100%', height: 370}}>
        <Carousel
          layout="default"
          data={imageCarousel}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => onSelect(index)}
          renderItem={({item, index}) => (
            <ImageBackground
              key={index}
              style={styles.image}
              resizeMode="cover"
              source={item.image}>
              <View style={styles.wrapperHeader}>
                <HeaderFull type="tanpa__text" />
              </View>
              <Gap height={210} />
              <View style={styles.wrapperIndex}>
                <Text style={styles.text}>
                  {indexSelected + 1}/{imageCarousel.length}
                </Text>
              </View>
            </ImageBackground>
          )}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperContent}>
          <Gap height={30} />
          <Contents />
          <Gap height={16} />
          <View style={styles.wrapperBtn}>
            <Button
              type="contentDetail"
              title="Detail Studio"
              active={detailStudio}
              onPress={handleDetailStudio}
            />
            <Button
              type="contentDetail"
              title="Paket Studio"
              active={paketStudio}
              onPress={handlePaketStudio}
            />
            <Button
              type="contentDetail"
              title="Review"
              active={ReviewStudio}
              onPress={handleReviewStudio}
            />
          </View>
          <Gap height={20} />
          {detailStudio && <DetailContents />}
          {paketStudio && <PaketContents />}
          {ReviewStudio && <ReviewContents />}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailStudio;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  wrapperIndex: {
    position: 'absolute',
    backgroundColor: colors.button.secondary.background,
    borderRadius: 46,
    opacity: 0.7,
    width: 70,
    right: 35,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    paddingVertical: 7,
  },
  text: {
    fontSize: 11,
    color: colors.text.black,
    fontFamily: fonts.primary[500],
  },
  wrapperContent: {
    paddingHorizontal: 30,
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
