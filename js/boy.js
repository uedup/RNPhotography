/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Boy extends Component {
  constructor(props){
    super(props),
      this.state = {
        selectedTab:'home',
      }
  }
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'blue',
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
