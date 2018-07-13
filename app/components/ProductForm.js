import React, { Component } from 'react';
import { TextInput, View, Button, StyleSheet, Alert } from 'react-native';
import { addProduct } from '../../app/services/product';

class ProductForm extends Component {
    state = {
        name: '',
        price: 0,
        color: ''
    };

    handleChangeName = (name) => {
        this.setState({ name });
    }

    handleChangePrice = (price) => {
        this.setState({ price });
    }

    handleChangeColor = (color) => {
        this.setState({ color });
    }

    handleSubmit = () => {
        addProduct(this.state).then(res => {
            Alert.alert('Add result', 
                        `Status: ${res.status} ${JSON.stringify(res.data)}`);
        })
        ;
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.text}
                        placeholder="Product Name"
                        spellchecker={false}
                        value={this.state.name}
                        onChangeText={this.handleChangeName}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder="Price"
                        spellchecker={false}
                        value={this.state.price}
                        onChangeText={this.handleChangePrice}
                    />
                    <TextInput 
                        style={styles.text}
                        plcaeholder="Color"
                        spellchecker={false}
                        value={this.state.color}
                        onChangeText={this.handleChangeColor}
                    />
                </View>
                <Button title="Submit" onPress={this.handleSubmit}/>
            </View>
        );
    }
}

export default ProductForm;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        flex: 1
    },
    text: {
        margin: 20,
        padding: 10,
        backgroundColor: '#fff'
    }
});