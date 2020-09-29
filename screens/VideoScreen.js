import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video'
const { height, width } = Dimensions.get("window")

export default class VideoScreen extends Component {

  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
      isDone: false,
      screenType: 'cover',
      message: '--',
      paused: true,

    };
  }





  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 80, width: width,position: 'absolute', zIndex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row' }}>
            <View style={{ height: 40, width: 150, backgroundColor: 'blue',marginRight:40,borderRadius:10,justifyContent: 'center',alignItems:'center'}}>
              <Text style={{color:'white'}}>RECORDING</Text>

            </View>
            <View style={{ height: 40, width: 110, backgroundColor: 'blue',marginLeft:60,borderRadius:10,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{color:'white'}}>00:01:20</Text>

            </View>

          </View>

        </View>
      


        <Video
          source={{ uri: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4' }}
          style={styles.mediaPlayer}
          volume={100}
          muted={true}
          repeat={true}
          fullscreen={true}
          resizeMode={"cover"}
        />
        <View style={{height:80,width:width,position:'absolute',zIndex:2,bottom:0,justifyContent:'center',alignItems:'center'}}>
          <View style={{height:40,width:width-80,justifyContent:'center',alignItems:'center',backgroundColor:'blue',borderRadius:10}}>
            <TouchableOpacity onPress={this.props.navigation.navigate('IncedentReport')}>
            <Text style={{color:'white'}}>click to stop</Text>
            </TouchableOpacity>
          


          </View>

        </View>





      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mediaPlayer: {
    height: 799,
    width: width,
    zIndex: 1
  },

});
