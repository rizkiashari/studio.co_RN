/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {colors, fonts} from '../../utils';
import {Gap, Header} from '../../components';
import {
  DummyPerlengkapan_01,
  DummyPerlengkapan_02,
  DummyPerlengkapan_03,
  DummyPerlengkapan_04,
  DummyPerlengkapan_05,
  DummyPerlengkapan_06,
  DummyPerlengkapan_07,
  DummyPerlengkapan_08,
  DummyPerlengkapan_09,
  DummyPerlengkapan_10,
  DummyPerlengkapan_11,
} from '../../assets';
const PageDetailPerlengkapan = ({navigation}) => {
  const data = [
    {
      id: 1,
      type: 'Lighting',
      contents: [
        {
          id: 1,
          tumbnail: DummyPerlengkapan_01,
          name: 'Godox DP 1000 III',
          desc: '1000Ws, Proportional 150W Modeling Lamp 1/2000 to 1/800 Flash Duration',
        },
        {
          id: 2,
          tumbnail: DummyPerlengkapan_02,
          name: 'Godox DP 800 III',
          desc: '800Ws, Recycle Time: 1 sec @ Full Power 1/2000 to 1/800 Flash Duration',
        },
      ],
    },
    {
      id: 2,
      type: 'Reflektor',
      contents: [
        {
          id: 1,
          tumbnail: DummyPerlengkapan_03,
          name: 'Godox Standrad Reflektor',
          desc: 'medium-angle modifier that ships with the head',
        },
        {
          id: 2,
          tumbnail: DummyPerlengkapan_04,
          name: 'Godox DP 800 III',
          desc: '800Ws, Recycle Time: 1 sec @ Full Power 1/2000 to 1/800 Flash Duration',
        },
        {
          id: 3,
          tumbnail: DummyPerlengkapan_05,
          name: 'Black and White Foam Reflektor',
          desc: 'Rectangular Foam to reflect and soften lights',
        },
      ],
    },
    {
      id: 3,
      type: 'Softbox',
      contents: [
        {
          id: 1,
          tumbnail: DummyPerlengkapan_06,
          name: 'Softbox 80 x 120 - 2 Units',
          desc: 'For Soft, Pleasing Quality of Light 80x120x49cm',
        },
        {
          id: 2,
          tumbnail: DummyPerlengkapan_07,
          name: 'Octa 150',
          desc: ' octagonal-shaped softbox with a diameter of 150 cm (59.1").',
        },
      ],
    },
  ];

  const backDrop = [
    {
      id: 1,
      warna: '#ff000f',
      text: 'Primary Red',
    },
    {
      id: 2,
      warna: '#EA6F22',
      text: 'Orange',
    },
    {
      id: 3,
      warna: '#ff0',
      text: 'Yellow',
    },
    {
      id: 4,
      warna: '#3C963E',
      text: 'Teach Green',
    },
    {
      id: 5,
      warna: '#5BC5C3',
      text: 'Baby Blue',
    },
    {
      id: 6,
      warna: '#32B3D0',
      text: 'True Blue',
    },
    {
      id: 7,
      warna: '#F6B0BA',
      text: 'Coral Pink',
    },
    {
      id: 8,
      warna: '#F9F9F9',
      text: 'Super White',
    },
  ];

  const light = [
    {
      id: 1,
      type: 'Tripod',
      contents: [
        {
          id: 1,
          tumbnail: DummyPerlengkapan_08,
          name: 'Manfrotto 502AH Tripod Kit',
          desc: 'Pro Video Head and the Aluminum Tripod',
        },
      ],
    },
    {
      id: 2,
      type: 'Properti',
      contents: [
        {
          id: 1,
          tumbnail: DummyPerlengkapan_09,
          name: 'Barn doors',
          desc: 'Properti',
        },
        {
          id: 2,
          tumbnail: DummyPerlengkapan_10,
          name: 'Apple Boxes',
          desc: 'Properti',
        },
        {
          id: 3,
          tumbnail: DummyPerlengkapan_11,
          name: 'Sand Bags',
          desc: 'Properti',
        },
      ],
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title="Perlengkapan" onPress={() => navigation.goBack()} />
        <Gap height={20} />
        {data.map(item => (
          <View key={item.id}>
            <Text style={styles.type}>{item.type}:</Text>
            <Gap height={20} />
            {item.contents.map(content => (
              <>
                <View key={content.id} style={styles.wrapperContent}>
                  <Image source={content.tumbnail} style={styles.image} />
                  <View style={styles.wrapperText}>
                    <Text style={styles.title}>{content.name}</Text>
                    <Text style={styles.desc}>{content.desc}</Text>
                  </View>
                </View>
                <Gap height={12} />
              </>
            ))}
            <Gap height={24} />
          </View>
        ))}
        <Text style={styles.type}>Backdrop:</Text>
        <View style={styles.backdropWrapper}>
          {backDrop.map(item => (
            <View key={item.id} style={styles.contentBackdrop}>
              <View style={styles.colorBackdrop(item.warna)}></View>
              <Text style={styles.textColor}>{item.text}</Text>
            </View>
          ))}
        </View>
        <Gap height={10} />
        {light.map(item => (
          <View key={item.id}>
            <Text style={styles.type}>{item.type}:</Text>
            <Gap height={20} />
            {item.contents.map(content => (
              <>
                <View key={content.id} style={styles.wrapperContent}>
                  <Image source={content.tumbnail} style={styles.image} />
                  <View style={styles.wrapperText}>
                    <Text style={styles.title}>{content.name}</Text>
                    <Text style={styles.desc}>{content.desc}</Text>
                  </View>
                </View>
                <Gap height={12} />
              </>
            ))}
            <Gap height={24} />
          </View>
        ))}
      </View>
    </ScrollView>
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
  type: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.text.black,
  },
  wrapperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 78,
    height: 68,
    marginRight: 24,
  },
  wrapperText: {
    width: '70%',
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.text.black,
    fontSize: 12,
  },
  desc: {
    fontFamily: fonts.primary[400],
    color: colors.text.grey1,
    fontSize: 12,
    lineHeight: 20,
  },
  backdropWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentBackdrop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  colorBackdrop: warna => ({
    width: 73,
    height: 73,
    backgroundColor: warna,
  }),
  textColor: {
    fontFamily: fonts.primary[400],
    color: colors.text.black,
    fontSize: 10,
  },
});
