import React, { Component } from 'react';
import { View, Text,StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import IncedentViewTab from './IncedentViewTab';
const {height,width}=Dimensions.get('window')

export default class IncedentReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={{  color: 'white' }}>back</Text>
        </TouchableOpacity>
        <Text style={{color: 'white' }}>incedent report</Text>
        <Text style={{color: 'white' }}>cancel</Text>

      </View>
      <IncedentViewTab/>
      {/* <View style={{height:60,width:width,flexDirection:'row'}}>
          <View style={{height:60,width:104,backgroundColor:'black'}}>

          </View>
          <View style={{height:60,width:104,backgroundColor:'black',marginLeft:0.5}}>

            </View>
            <View style={{height:60,width:104,backgroundColor:'black',marginLeft:0.5}}>

            </View>
            <View style={{height:60,width:104,backgroundColor:'black',marginLeft:0.5}}>

            </View>



      </View> */}
      </View>
    );
  }
}

const styles=StyleSheet.create({
    header: {
        height: 50,
        width: width,
        backgroundColor: '#030067',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
      },
})
