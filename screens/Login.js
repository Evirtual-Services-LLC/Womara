import React from 'react'
import { View, StyleSheet, Text ,Image,ImageBackground,Dimensions,TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import TabView from '../screens/tabView'
const {height,width}= Dimensions.get('window');


export default function Welcome({navigation}) {
  return (
    // <View>
    <View style={{flex:1}}>
        
    <ImageBackground style={ styles.imgBackground } 
    // resizeMode='cover' 
    source={require('../assets/icons/login.png')}>
        <View style={{position:'relative',alignContent:'center',alignItems:'center',top:20}}>
   <Image source={require('../assets/icons/logo.png')} style={{height:200,width:250}}/>
   </View>
      </ImageBackground>
      {/* <View> */}
      <TabView/>
      {/* </View> */}
 
   
      </View>
 


 

  
  
  )
}

const styles = StyleSheet.create({
  
     
   
    imgBackground: {
      flex:.5,
      width: width,
       height:height/2.8
  },

    
})