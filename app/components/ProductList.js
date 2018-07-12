import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { getProducts } from '../services/product';

class ProductList extends React.Component {
    state = { products: [] }
    componentDidMount(){
        // getProducts().then(products => {
        //     console.log(products);
        // });

        this.props.navigation.addListener(
            'didFocus',
            () => {
                getProducts().then(products => {
                    this.setState({ products });
                });
            }
        );
    }

    handlePressButton = () => {
        this.props.navigation.navigate('detail', {
            'msg' : 'Message from Product List'
        });
    }

    render() {
      const products = this.state.products;
      return (
        <FlatList 
            data = {this.state.products}
            renderItem = {({ item }) => { console.log(item); return (
                <Text>{item.name}</Text>
            )}}
        />
      );
    }
  }

export default ProductList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 5
    }
});