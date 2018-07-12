import { createStackNavigator } from 'react-navigation';
import ProductList from './app/components/ProductList';
import ProductDetail from './app/components/ProductDetail';

export default createStackNavigator({
  list: {
    screen: ProductList,
    navigationOptions: () => ({
      title: 'Product List'
    })
  },
  detail: {
    screen: ProductDetail,
    navigationOptions: () => ({
      title: 'Product Detail'
    })
  }
});


