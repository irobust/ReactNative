import React, { Component } from 'react';
import { Text, Button, StyleSheet } from 'react-native';

class Demo extends Component {
    state = { visibility: true,
              gameStatus: 'DONE' }

    render() {
        return [
            <Text> Demo </Text>,
            <Text 
                style={styles[`GAME_${this.state.gameStatus}`]} 
            >Game Status</Text>,
            <Text>{this.props.currentId}</Text>,
            <Button title="Reset" onPress={
                () => {this.props.reset()}
            } />
        ];
    }
}

export default Demo;

const styles = StyleSheet.create({
    "GAME_DONE": {
        backgroundColor: 'red'
    }
});