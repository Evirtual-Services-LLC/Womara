import React from 'react'
import { View, StyleSheet, Text ,Image,ImageBackground,Dimensions,TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { useNavigation } from '@react-navigation/native';

const {height,width}= Dimensions.get('window');
export default function signIn (){
  const navigation = useNavigation();
  
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{justifyContent:'center',alignItems:'center',top:-25,alignContent:'center',flex:.2}} >
        <Text style={{fontSize:18}}>Hello,User Welcome back!</Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Login in your account</Text>
        </View>
        
          <View style={{flexDirection:'row'}}>
          <View style={{height:50,width:width/2.35,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5,backgroundColor: '#F5FFFA',marginRight:12,flexDirection:'row'}}>
          <Image source={require('../assets/icons/google.png')} style={{height:20,width:20}}/>
          <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:4}}>Google</Text>
          </View>
          
          <View style={{height:50,width:width/2.35,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5,backgroundColor: '#000080',flexDirection:'row'}}>
            <Image source={require('../assets/icons/facebook.png')} style={{height:20,width:20}}/>
          <Text style={{fontSize:18,fontWeight:'bold',color:'white',marginLeft:4}}>Facebook</Text>
          
          </View>
          </View>
          <View style={styles.MainContainer}>
          <View style={styles.SectionStyle}>
        <Image
         
          source={require('../assets/icons/user.png')}
          style={styles.ImageStyle}
        />

        <TextInput
        
          placeholder="Username"
          underlineColorAndroid="transparent"
        />
      </View>
     
        <View style={{marginTop:8}}>
        
         <View style={styles.SectionStyle}>
        <Image
        
          source={require('../assets/icons/password.png')}
          style={styles.ImageStyle}
        />

        <TextInput
          
          placeholder="Password"
          underlineColorAndroid="transparent"
        />
      </View>
     
      
        </View>
        
      
  
  
</View>
         <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5,backgroundColor:'black'}}>
          <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Sign In</Text>
        
      
          </View>
          </TouchableOpacity>
 <View style={{flex:.1}}><View style={{alignContent:'center'}}><Text style={{fontSize:18, textAlign:'center'}}>Forgot Password</Text></View>
<View style={{alignContent:'center',marginLeft:-20,flexDirection:'row'}}><Text style={{fontSize:18,alignSelf:'center',textAlign:'center'}}>Don't have an account -  </Text><Text style={{fontSize:18, fontWeight:'bold', color:'darkblue'}}>Sign Up</Text></View>
   </View>       





      </View>

  
    )}
const styles = StyleSheet.create({
    
  
  
    MainContainer :{
   
      // Setting up View inside content in Vertically center.
      justifyContent: 'center',
      // flex:1,
      margin: 10
       
      },
       
      TextInputStyleClass:{
       
      height: 50,
      width:width-40,
       borderWidth: 2,
       borderColor: 'lightgrey',
       borderRadius: 5 ,
       backgroundColor : "#FFFFFF",
       fontSize:18
       
      },
      imgBackground: {
        width: width,
        height: '40%',
        flex: 1
  },
  SectionStyle: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 50,
    width:width-40,
    borderRadius: 5,
    // margin: 10,
    fontSize:18,
    fontWeight:'bold'
  },
  
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    // alignItems: 'center',
  },
  // });
      
  })