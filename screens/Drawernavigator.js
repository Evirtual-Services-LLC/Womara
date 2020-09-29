import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from "../screens/Dashboard"
import CustmizeDrawer from "../screens/CustomizeDrawer"

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function Drawernavigator() {
  return (
   
      <Drawer.Navigator drawerContent={() => <CustmizeDrawer />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown:false }}
        />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>

 
  );
}