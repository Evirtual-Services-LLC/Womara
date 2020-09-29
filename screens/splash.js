import React from 'react'
import { Component } from 'react';
import { View, StyleSheet, Text,Image } from 'react-native'
// import Login from 

export default class splash extends Component {

    constructor(props){
        super(props);
        setTimeout(() => {
       
            this.load();
        }, 2000);

    }
    load = () => {
      this.props.navigation.push("Welcome");
  };
    render(){
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>
        You haven't joined any chat rooms yet :'(
      </Text> */}
      <Image source= {require('../assets/icons/womara.png')} style={{width:400,height:300}}/>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dee2eb'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  }
})