import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from '../screen/splash/Splashscreen';
import MusicMain from '../screen/musicHome/MusicMain';
import MusicList from '../screen/musicList/MusicList';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={Splashscreen} />
        <Stack.Screen name="MusicMain" component={MusicMain} />
        <Stack.Screen name="MusicList" component={MusicList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
