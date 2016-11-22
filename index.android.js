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
    View,
    ListView
} from 'react-native';

export default class expertgroup extends Component {

  constructor() {
  super();
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8','row 9', 'row 10', 'row 11', 'row 12']),
  };
}
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
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Text style={styles.listItem}>{rowData}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flexDirection: 'column', alignItems: 'flex-end'},
    welcomeMsgContainer: {backgroundColor: '#ff0000'},
    welcomeMsg: {color: '#fff', fontWeight: 'bold'},
    jumbotronContainer: {backgroundColor: '#ffff00'},
    jumbotron: {color: '#000'},
    listItem: {backgroundColor: '#00ffff'}
});


AppRegistry.registerComponent('expertgroup', () => expertgroup);
