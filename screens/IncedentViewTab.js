import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import Location from "../screens/location";
import PersonStopped from "../screens/PersonStopped";
import Officer from "../screens/Officer"
import Extra from "../screens/Extra"
import { Constants } from 'expo';

const FirstRoute = () => (
//   <View style={[styles.container, { backgroundColor: 'white' }]} />
<Location/>
);
const SecondRoute = () => (
//   <View style={[styles.container, { backgroundColor: 'white' }]} />
<PersonStopped/>
);
const ThirdRoute = () => (
    // <View style={[styles.container, { backgroundColor: 'white' }]} />
    <Officer/>
  );
const ForthdRoute = () => (
    // <View style={[styles.container, { backgroundColor: 'white' }]} />
    <Extra/>
);
export default class  extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Location' },
      { key: 'second', title: 'Person Stopped' },
      { key: 'third', title: 'Officer(s)' },
      { key: 'forth', title: 'Extra' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color:"white" }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
    forth:ForthdRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor:'black',
    
    
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
