import React, { Component } from 'react';
import { View, Text ,FlatList} from 'react-native';
import {home,eye,streetforkids,lifeAlert} from '../utils/images'


// const MENU_DATA = [
//   { icon: home, title: "Home", selected: true, id: 0 },
//   { icon: eye, title: "Life Alert", selected: false, id: 1 },
//   { icon: lifeAlert, title: "Street Watch 4 Kids", selected: false, id: 3 },
//   { icon:streetforkids, title: "Community Officer Advocate", selected: false, id: 4 },
//   { icon: home, title: "Update Profile", selected: false, id: 5 },
//   { icon: home, title: "Purpose", selected: false, id: 6 },
//   { icon: home, title: "What to Expect", selected: false, id: 7 },
//   { icon: home, title: "Why WOMARA", selected: false, id: 8 },
//   { icon: home, title: "Change Password", selected: false, id: 9 },
//   { icon: home, title: "Help", selected: false, id: 10},
//   { icon: home, title: "Logout", selected: false, id: 11 }
// ];
export default class CustomizeDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  
  render() {
    return (
      <View style={{ flex:1 , backgroundColor:'#030067'}}>
        
        <View>
        <Text> Customizedrawer </Text>
        </View>
        <View>
       
        </View>
        
       {/* < View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}></View> */}

{/* <Text> Customizedrawer </Text> */}
      </View>
    );
  }
}
