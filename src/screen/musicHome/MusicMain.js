import { Image, StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Images,Colors } from '../../constants'
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Slider from '@react-native-community/slider';


const MusicMain = ({ route }) => {
  const navigation=useNavigation();
  const { data } = route.params;

 
  useEffect(() => {
    console.log('cdcdv',data); 
  }, [])
  
  const renderItem = ({item, index}) => {
    <View style={{height:25,width:55,backgroundColor:'red'}}>

    </View>
  }

  return (
    <View
    style={styles.container}>
    <TouchableOpacity
    onPress={()=>navigation.goBack()}>
     <Image source={Images.BACK_ARROW} style={styles.backButton}/>
     </TouchableOpacity>
     {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item =>item?.id }
      /> */}
      <View style={styles.bannerView}>
      <Image source={data?.image} style={{height:responsiveHeight(45),width:'100%', borderRadius:15}}/>
      </View>
      <Text style={styles.textStyle}>{data?.title}</Text>
      <View style={{marginTop:25}}>
      <Slider
        style={{width: '80%', height: 40,marginLeft:45}}
        minimumTrackTintColor="red"
  maximumTrackTintColor="yellow"
      />
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
},
bannerView:{
  height:responsiveHeight(45),
  width:'90%',
  marginHorizontal:25,
  backgroundColor:Colors.WHITE_COLOR,
  borderRadius:15
},
textStyle:{
  color:Colors.WHITE_COLOR,
  fontSize:25,
  fontWeight:'700',
  marginHorizontal:35,
  marginTop:25
}
})