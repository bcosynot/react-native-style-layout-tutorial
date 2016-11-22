/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class expertgroup extends Component {
    render() {
        return (
            <View style={styles.welcomeMsgContainer}>
                <Text style={styles.welcomeMsg}>
                    Hello World!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcomeMsgContainer: {backgroundColor: '#ff0000'},
    welcomeMsg: {color: '#fff', fontWeight: 'bold'}
});


AppRegistry.registerComponent('expertgroup', () => expertgroup);
