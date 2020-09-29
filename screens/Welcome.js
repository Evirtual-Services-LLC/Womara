import React from 'react'
import { View, StyleSheet, Text ,Image,ImageBackground,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height,width}= Dimensions.get('window');
export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
        <View style ={{flex:0.7,justifyContent:'center',alignItems:'center'}}>
            <View style={{marginTop:1}}>
            <Image source= {require('../assets/icons/womara.png')}  style={{height:250 ,width:320}}/>
            </View>
      
        </View>
        <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
            {/* <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:.5,borderRadius:5,marginTop:5}}> */}
            <Text style={{fontSize:18}}>Hello, Welcome to womara!</Text>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Get Started Now</Text>
            {/* </View> */}
            {/* <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Life Alert</Text>
            </View> */}
            {/* <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Dog Deterent</Text>
            </View> */}
            {/* <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Street watch 4 Kids</Text>
            </View> */}
            {/* <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Community Officer Advocate</Text>
            </View> */}
            <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5,backgroundColor: 'black'}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Sign In</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderWidth:.5,borderRadius:5,marginTop:5,backgroundColor: '#000080',}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Create an account</Text>
            
            </View>
            </TouchableOpacity>




        </View>

        {/* <View style= {{flex:0.1,justifyContent:'center',alignItems:'center'}}>
        <View style={{height:50,width:width-40,ImageBackground:'red',justifyContent:'center',alignItems:'center',borderWidth:0.5}}>
            
            </View> */}

        {/* </View> */}
      {/* <Text style={styles.title}>
        You haven't joined any chat rooms yet :'(
      </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  },
  text:{
      justifyContent:'center',
      alignItems:'center'
  }
})