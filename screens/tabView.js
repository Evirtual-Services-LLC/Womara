import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import SignIn from './signIn'
import SignUp from './signUp'

// import { Constants } from 'expo';

const FirstRoute = ({navigation}) => (
  // <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
  <SignIn/>
);
const SecondRoute = (navigation) => (
  // <View style={[styles.container ]} />
  <SignUp/>
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Sign In' },
      { key: 'second', title: 'Sign Up' },
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
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
            // <TouchableHighlight key={item.key} underlayColor='#dddddd'></TouchableHighlight>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: SignIn,
    second: SignUp,
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
    // fontSize:30
    // paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    fontSize:20
  },
});
