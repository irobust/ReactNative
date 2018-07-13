import React from 'react';
import { Text, View, Button, Image } from 'react-native';

class ProductDetail extends React.Component {
    goHome = () => {
        this.props.navigation.popToTop();
    }
    render() {
      const { navigation }  = this.props;
      const message = navigation.getParam('msg');
      const product = navigation.getParam('product');

      return [
            <Text>Product Detail</Text>,
            <Button title="Home"
                    onPress={this.goHome} />,
            <Text>{product.name}</Text>,
            <Image source={{uri: product.image}} />
      ];
    }
  }

export default ProductDetail;