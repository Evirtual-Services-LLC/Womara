import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,Picker } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const {height,width}=Dimensions.get('window')



export default class location extends Component {
  state = {user: 'Select Location'}
  updateUser = (user) => {
     this.setState({ user: user })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{color:'pink',paddingTop: 10,fontSize:15,fontWeight:'bold',paddingLeft:15}}>LOCATION OF THE STOP</Text>
        {/* <View style={styles.textInput}>
          <View style={{position:'absolute'}}>
            <Text style={{paddingLeft:250}}>left icon</Text>

          </View>
          
          <TextInput
           placeholder="Select Location"
           value={this.state.location}
           style={{borderBottomWidth:0.5,height:50,paddingLeft:15,width:width-40}}
          />
        
        
          
        </View> */}
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{ height: 50, width: width-40,marginLeft:15 }}>
               <Picker.Item label = "india" value = "steve" />
               <Picker.Item label = "Egland" value = "ellen" />
               <Picker.Item label = "austrilia" value = "maria" />
            </Picker>
            {/* <Text style = {{paddingLeft:20}}>{this.state.user}</Text> */}
       
        <Text style={{color:'pink',paddingTop: 10,fontSize:15,fontWeight:'bold',paddingLeft:15}}>INTERSECTION OF THE STOP</Text>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <TextInput
           placeholder="Describe to the closet intersection"
           value={this.state.location}
           style={{borderBottomWidth:0.5,height:50,paddingLeft:15,width:width-40,paddingTop:40}}
          />
          </View>
        
           

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput:{
    justifyContent:'center',
    alignItems:'center'

  }


});
