import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Images,Colors } from '../../constants'

const MusicMain = () => {
  const navigation=useNavigation();
  return (
    <View
    style={styles.container}>
    <View>
     <Image source={Images.BACK_ARROW} style={styles.backButton}/>
     </View>
    </View>
  )
}

export default MusicMain

const styles = StyleSheet.create({
  container:{
flex:1,
backgroundColor:Colors.BLACK_COLOR,
  },
backButton:{
  height:20,
  width:20,
  marginVertical:25,
  marginLeft:22,
  tintColor:Colors.WHITE_COLOR
}
})