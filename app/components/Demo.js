import React, { Component } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

class Demo extends Component {
    state = { visibility: true,
              gameStatus: 'DONE' }

    render() {
        return [
            <Text key={1}> Demo </Text>,
            <Text key={2} 
                style={styles[`GAME_${this.state.gameStatus}`]} 
            >Game Status</Text>,
            <Text key={3}>{this.props.currentId}</Text>,
            <View key={4}>{ this.state.visibility && <Button title="Reset" onPress={this.props.reset} />}</View>
        ];
    }
}

export default Demo;

const styles = StyleSheet.create({
    "GAME_DONE": {
        backgroundColor: 'red'
    }
});