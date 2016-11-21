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
  View
} from 'react-native';

export default class expertgroup extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello World!
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('expertgroup', () => expertgroup);
