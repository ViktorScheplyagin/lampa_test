import Cart from 'pages/Cart/Cart';
import { connect } from 'react-redux';
import { AppStateType } from 'store';
import { addProductToCart, removeProductFromCart } from 'store/resource/cart/actions';

const mapStateToProps = (state: AppStateType) => ({
  items: state.cart.items
});

export default connect(mapStateToProps, {
  addItem: addProductToCart,
  removeItem: removeProductFromCart,
})(Cart);