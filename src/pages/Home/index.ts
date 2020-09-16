import Home from './Home';
import { connect } from 'react-redux';

import { AppStateType } from 'store';
import { fetchProductsTC } from 'store/resource/home/thunks';
import { addProductToCartTC, fetchCartItemsTC } from 'store/resource/cart/thunks';

const mapStateToProps = ({ home, cart }: AppStateType) => ({
  products: home.products,
  cartItemsLength: cart.items.length,
  isProductsFetching: home.isProductsFetching,
  isProductAddingToCart: cart.isProductAdding,
});

export default connect(mapStateToProps, {
  addToCart: addProductToCartTC,
  fetchProducts: fetchProductsTC,
  fetchCartItems: fetchCartItemsTC,
})(Home);
