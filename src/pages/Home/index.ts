import Home from './Home';
import { connect } from 'react-redux';

import { addProductToCart } from 'store/resource/cart/actions';
import { fetchNewProducts } from 'store/resource/home/actions';
import { AppStateType } from 'store';

const mapStateToProps = (state: AppStateType) => ({
  products: state.home.products,
});

export default connect(mapStateToProps, {
  addToCart: addProductToCart,
  fetchProducts: fetchNewProducts,
})(Home);