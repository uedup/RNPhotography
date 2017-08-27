/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Navigator,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
export default class RNPhotography extends Component {
  constructor(props){
    super(props),
    this.state = {
      selectedTab:'home',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/*<TabNavigator>*/}
          {/*<TabNavigator.Item*/}
            {/*selected={this.state.selectedTab === 'home'}*/}
            {/*selectedTitleStyle = {{color:'pink'}}*/}
            {/*title="Home"*/}
            {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}  />}*/}
            {/*renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}*/}
            {/*badgeText="1"*/}
            {/*onPress={() => this.setState({ selectedTab: 'home' })}>*/}
            {/*<View style={styles.page1}></View>*/}
          {/*</TabNavigator.Item>*/}
          {/*<TabNavigator.Item*/}
            {/*selected={this.state.selectedTab === 'profile'}*/}
            {/*selectedTitleStyle = {{color:'pink'}}*/}
            {/*title="Profile"*/}
            {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')}  />}*/}
            {/*renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_favorite.png')}  />}*/}
            {/*onPress={() => this.setState({ selectedTab: 'profile' })}>*/}
            {/*<View style={styles.page2}></View>*/}
          {/*</TabNavigator.Item>*/}
          {/*<TabNavigator.Item*/}
            {/*selected={this.state.selectedTab === 'fore2'}*/}
            {/*selectedTitleStyle = {{color:'pink'}}*/}
            {/*title="fore3"*/}
            {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')}  />}*/}
            {/*renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_my.png')} />}*/}
            {/*badgeText="10"*/}
            {/*onPress={() => this.setState({ selectedTab: 'fore2' })}>*/}
            {/*<View style={styles.page1}></View>*/}
          {/*</TabNavigator.Item>*/}
          {/*<TabNavigator.Item*/}
            {/*selected={this.state.selectedTab === 'fore3'}*/}
            {/*selectedTitleStyle = {{color:'pink'}}*/}
            {/*title="fore3"*/}
            {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_share.png')}  />}*/}
            {/*renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_share.png')}  />}*/}
            {/*onPress={() => this.setState({ selectedTab: 'fore3' })}>*/}
            {/*<View style={styles.page2}></View>*/}
          {/*</TabNavigator.Item>*/}
        {/*</TabNavigator>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image:{
    width:20,
    height:20
  },
  page1:{
    flex:1,
    backgroundColor:'yellow'
  },
  page2:{
    flex:1,
    backgroundColor:'blue'
  }
});

AppRegistry.registerComponent('RNPhotography', () => RNPhotography);
