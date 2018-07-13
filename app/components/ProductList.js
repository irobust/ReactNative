import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { getProducts } from '../services/product';
import { List, ListItem } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

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

    handlePressItem = (product) => {
        this.props.navigation.navigate('detail', {
            'msg' : 'Message from Product List',
            'product': product
        });
    }

    handleAddProduct = () => {
        this.props.navigation.navigate('form');
    }

    render() {
      const products = this.state.products;
      return [
            <List key='productlist' containerStyle={{ marginTop: 20 }}>
            {
                products.map((product, index) => (
                    <ListItem
                        onPress={() => { this.handlePressItem(product) }}
                        roundAvatar
                        avatar={{ uri:product.image }}
                        key={index}
                        title={product.name}
                    />
                ))
            }
            </List>,
            <ActionButton
                key="fab"
                buttonColor="rgba(231, 76, 60, 1)"
                onPress={this.handleAddProduct}
            ></ActionButton>
      ];
    }
  }

export default ProductList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 5
    }
});