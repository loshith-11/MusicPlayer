import { Image, StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Images,Colors } from '../../constants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Slider from '@react-native-community/slider';
import { Songs } from '../../musicData/MusicData';


const MusicMain = ({ route }) => {
  const navigation=useNavigation();
  const { data } = route.params;

 
  useEffect(() => {
    console.log('cdcdv',data); 
  }, [])
  
  const renderItem = ({item, index}) => {
    console.log('item>>',item);
    return(
    <View style={{height:responsiveHeight(45),
    width:responsiveWidth(92),marginLeft:responsiveHeight(2),marginRight:responsiveHeight(2)}}>
<Image source={item.image} style={{height:responsiveHeight(45),width:'100%', borderRadius:15}}/>
    </View>
    )
  }

  return (
    <View
    style={styles.container}>
    <TouchableOpacity
    onPress={()=>navigation.goBack()}>
     <Image source={Images.BACK_ARROW} style={styles.backButton}/>
     </TouchableOpacity>
    
      <View>
      {/* <Image source={data?.image} style={{height:responsiveHeight(45),width:'100%', borderRadius:15}}/> */}
       <FlatList
        data={Songs}
        horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item =>item?.id }
      />
      </View>
      <Text style={styles.textStyle}>{data?.title}</Text>
      <View style={{marginTop:25}}>
      <Slider
        style={{width: '80%', height: 40,marginLeft:45}}
        minimumTrackTintColor="red"
  maximumTrackTintColor="yellow"
      />
      </View>
      
<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:responsiveHeight(5),
  marginHorizontal:responsiveHeight(5)
}}>
<TouchableOpacity>
  <Image
    source={Images.REWIND_BUTTON}
    style={{tintColor:Colors.WHITE_COLOR,height:35,
    width:35}}
  />
</TouchableOpacity>
<TouchableOpacity>
  <Image
    source={Images.PLAY_BUTTON}
    style={{tintColor:Colors.WHITE_COLOR,height:35,
    width:35}}
  />
</TouchableOpacity>
<TouchableOpacity>
  <Image
    source={Images.FORWARD_BUTTON}
    style={{tintColor:Colors.WHITE_COLOR,height:35,
    width:35}}
  />
</TouchableOpacity>

</View>
<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:responsiveHeight(5),
  marginHorizontal:responsiveHeight(10)
}}>
<TouchableOpacity>
  <Image
    source={Images.SHUFFLE_BUTTON}
    style={{tintColor:Colors.WHITE_COLOR,height:35,
    width:35}}
  />
</TouchableOpacity>
<TouchableOpacity>
  <Image
    source={Images.REPEAT_BUTTON}
    style={{tintColor:Colors.WHITE_COLOR,height:35,
    width:35}}
  />
</TouchableOpacity>
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