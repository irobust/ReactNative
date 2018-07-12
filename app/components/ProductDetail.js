import React from 'react';
import { Text, View, Button } from 'react-native';

class ProductDetail extends React.Component {
    goHome = () => {
        this.props.navigation.popToTop();
    }
    render() {
      const { navigation }  = this.props;
      const message = navigation.getParam('msg');
      return [
            <Text>Product Detail</Text>,
            <Button title="Home"
                    onPress={this.goHome} />,
            <Text>{message}</Text>
      ];
    }
  }

export default ProductDetail;