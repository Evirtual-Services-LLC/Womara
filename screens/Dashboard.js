

import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, Dimensions, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
const { height, width } = Dimensions.get('window');
export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={{ paddingHorizontal: 15, color: 'white' }}>kdck</Text>
        </TouchableOpacity>
        <Text style={{ paddingRight: 15, color: 'white' }}>scmd m,</Text>

      </View>
      <ImageBackground source={require('../assets/icons/back.jpg')} style={styles.backgroundImage}

      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20 }}>

          <View style={{ height: 30, width: 30, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center', borderRadius: 30 / 2 }}>
            <Text style={{ color: 'white' }}>icon</Text>

          </View>

          <View style={{ height: 30, width: 30, backgroundColor: '#fe0000', justifyContent: 'center', alignItems: 'center', borderRadius: 30 / 2 }}>
            <Text style={{ color: 'white' }}>icon</Text>

          </View>

        </View>
        <View style={styles.bottomView}>
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, paddingTop: 10 }}>Welcome</Text>
            <Text style={{ color: 'white', fontWeight: 'bold', paddingTop: 5, fontSize: 20 }}>Donnie McClurrink</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("VideoScreen")}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 40, width: width - 80, backgroundColor: 'red', marginTop: 5, borderRadius: 10 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>record</Text>

            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={()=>navigation.navigate("IncedentReport")}>
            <View style={{ height: 40, width: 160, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center',  marginTop: 10, borderRadius: 10,marginRight:5 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>report</Text>
            </View>
            </TouchableOpacity>
            <View style={{ height: 40,marginLeft:5, width: 160, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 10 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>witness</Text>
            </View>


          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:15 }}>
            <View style={{ height: 40, width: 160, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 10,marginRight:5 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Dog</Text>
            </View>
           
            <View style={{ height: 40, width: 160, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginLeft:5 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>commmunity</Text>
            </View>
          


          </View>
        </View>








      </ImageBackground>
    </View>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    height: 50,
    width: width,
    backgroundColor: '#030067',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  backgroundImage: {
    height: height - 160,
    width: width,
    flex: 1,
    resizeMode: 'cover'
  },
  bottomView: {
    height: 230,
    width: width,
    backgroundColor: '#030067',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }



})