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
            <View style={styles.container}>
                <View style={styles.welcomeMsgContainer}>
                    <Text style={styles.welcomeMsg}>
                        Hello World!
                    </Text>
                </View>
                <View style={styles.jumbotronContainer}>
                    <Text style={styles.jumbotron}>
                        Welcome to react native
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flexDirection: 'column', alignItems: 'flex-end'},
    welcomeMsgContainer: {backgroundColor: '#ff0000'},
    welcomeMsg: {color: '#fff', fontWeight: 'bold'},
    jumbotronContainer: {backgroundColor: '#ffff00'},
    jumbotron: {color: '#000'}
});


AppRegistry.registerComponent('expertgroup', () => expertgroup);
