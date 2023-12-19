import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Images} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const Splashscreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MusicList');
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image
          source={Images.MUSIC_NOTE_IMAGE}
          style={styles.firstImageStyle}
        />
        <Text style={styles.textStyle}>Music Player</Text>
        <Image
          source={Images.MUSIC_TONE_IMAGE}
          style={styles.secondImageStyle}
        />
      </View>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK_COLOR,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(25),
  },
  textStyle: {
    fontSize: responsiveFontSize(4),
    color: Colors.WHITE_COLOR,
    fontWeight: '800',
    marginRight: responsiveHeight(10),
  },
  firstImageStyle: {
    tintColor: Colors.WHITE_COLOR,
    height: responsiveHeight(32),
    width: responsiveWidth(67),
  },
  secondImageStyle: {
    tintColor: Colors.WHITE_COLOR,
    height: responsiveHeight(8),
    width: responsiveWidth(20),
    position: 'absolute',
    top: responsiveHeight(30),
    left: responsiveHeight(31),
  },
});
