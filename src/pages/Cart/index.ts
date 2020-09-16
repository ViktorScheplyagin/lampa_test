import Cart from 'pages/Cart/Cart';
import { connect } from 'react-redux';
import { AppStateType } from 'store';
import { fetchProductsTC } from 'store/resource/home/thunks';
import {
  addProductToCartTC,
  fetchCartItemsTC,
  removeProductFromCartTC,
  submitOrderTC,
} from 'store/resource/cart/thunks';

const mapStateToProps = ({ home, cart }: AppStateType) => ({
  items: cart.items,
  productsLength: home.products.length,
  isProductsFetching: cart.isProductsFetching,
  isProductAdding: cart.isProductAdding,
  isProductRemoving: cart.isProductRemoving,
});

export default connect(mapStateToProps, {
  addItem: addProductToCartTC,
  removeItem: removeProductFromCartTC,
  submitOrder: submitOrderTC,
  fetchProducts: fetchProductsTC,
  fetchCartItems: fetchCartItemsTC,
})(Cart);
