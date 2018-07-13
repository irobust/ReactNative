import { createStackNavigator } from 'react-navigation';
import ProductList from './app/components/ProductList';
import ProductDetail from './app/components/ProductDetail';
import ProductForm from './app/components/ProductForm';
import Parent from './app/components/Parent';

export default createStackNavigator({
  demo:{
    screen: Parent
  },
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
  },
  form: {
    screen: ProductForm
  }
});


