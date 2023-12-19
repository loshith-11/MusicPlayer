import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {Colors, Images} from '../../constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const MusicList = () => {
  const dummyData = [
    {
      id: '1',
      image: Images.IMAGE_ONE,
      title: 'Song1',
    },
    {
      id: '2',
      image: Images.IMAGE_TWO,
      title: 'Song2',
    },
    {
      id: '3',
      image: Images.IMAGE_THREE,
      title: 'Song3',
    },
    {
      id: '4',
      image: Images.IMAGE_FOUR,
      title: 'Song4',
    },
    {
      id: '5',
      image: Images.IMAGE_FIVE,
      title: 'Song5',
    },
    {
      id: '6',
      image: Images.IMAGE_SIX,
      title: 'Song6',
    },
    {
      id: '7',
      image: Images.IMAGE_SEVEN,
      title: 'Song7',
    },
    {
      id: '8',
      image: Images.IMAGE_EIGHT,
      title: 'Song8',
    },
    {
      id: '9',
      image: Images.IMAGE_NINE,
      title: 'Song9',
    },
    {
      id: '10',
      image: Images.IMAGE_TEN,
      title: 'Song10',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.musicContainer}>
          <Image source={item.image} style={styles.imageStyle} />
          <Text style={styles.songText}>{item?.title}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextStyle}>Home</Text>
      </View>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK_COLOR,
  },
  headerContainer: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.BLACK_COLOR,
  },
  headerTextStyle: {
    marginLeft: responsiveHeight(6),
    color: Colors.WHITE_COLOR,
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
  },
  musicContainer: {
    height: responsiveHeight(10),
    width: responsiveWidth(85),
    backgroundColor: Colors.WHITE_COLOR,
    marginLeft: responsiveHeight(3),
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
  },
  imageStyle: {
    height: responsiveHeight(9),
    width: responsiveWidth(25),
    borderRadius: 10,
    marginTop: responsiveHeight(0.5),
    marginLeft: responsiveHeight(1),
  },
  songText: {
    marginVertical: 25,
    fontSize: 22,
    textAlign: 'center',
    color: Colors.BLACK_COLOR,
    paddingLeft: 55,
  },
});
