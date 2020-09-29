import { OrderPayload, ProductPayload } from 'store/entities/model';
import {
  deleteItemFromCart,
  getAllCartItems,
  postItemToCart,
  postOrder,
} from 'services/api';
import {
  addProductToCartAC,
  fetchCartItemsAC,
  removeProductFromCartAC,
  toggleIsOrderSubmittingAC,
  toggleIsProductAddingAC,
  toggleIsProductRemovingAC,
  toggleIsProductsFetchingAC,
} from 'store/resource/cart/actions';

export const submitOrderTC = (order: OrderPayload) => async (dispatch) => {
  dispatch(toggleIsOrderSubmittingAC(true));

  await postOrder(order);

  dispatch(toggleIsOrderSubmittingAC(false));
};

export const fetchCartItemsTC = () => async (dispatch) => {
  dispatch(toggleIsProductsFetchingAC(true));

  const cartItemsJSON = await getAllCartItems();
  const cartItems: ProductPayload[] = JSON.parse(cartItemsJSON as string);

  dispatch(toggleIsProductsFetchingAC(false));
  dispatch(fetchCartItemsAC(cartItems));
};

export const addProductToCartTC = (product: ProductPayload) => async (
  dispatch,
) => {
  dispatch(toggleIsProductAddingAC(true));
  await postItemToCart(product);
  dispatch(addProductToCartAC(product));
  dispatch(toggleIsProductAddingAC(false));
};

export const removeProductFromCartTC = (product: ProductPayload) => async (
  dispatch,
) => {
  dispatch(toggleIsProductRemovingAC(true));
  await deleteItemFromCart(product.id);
  dispatch(removeProductFromCartAC(product));
  dispatch(toggleIsProductRemovingAC(false));
};
