import { connect } from 'react-redux';
import NavBar from './NavBar';
import { AppStateType } from 'store';
import { calcTotalPrice } from 'pages/Cart/helpers';

const mapStateToProps = (state: AppStateType) => ({
  totalCartItemsPrice: calcTotalPrice(state.cart.items),
});

export default connect(mapStateToProps)(NavBar);
