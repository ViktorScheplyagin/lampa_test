import { OrderPayload, ProductPayload } from 'store/entities/model';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';
export const TOGGLE_IS_ORDER_SUBMITTING = 'TOGGLE_IS_ORDER_SUBMITTING';
export const TOGGLE_IS_PRODUCTS_FETCHING = 'TOGGLE_IS_PRODUCTS_FETCHING';
export const TOGGLE_IS_PRODUCT_ADDING = 'TOGGLE_IS_PRODUCT_ADDING';
export const TOGGLE_IS_PRODUCT_REMOVING = 'TOGGLE_IS_PRODUCT_REMOVING';
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const fetchCartItemsAC = (items: ProductPayload[]) => ({
  type: FETCH_CART_ITEMS,
  payload: items,
});

export const addProductToCartAC = (product: ProductPayload) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const removeProductFromCartAC = (product: ProductPayload) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: product,
});

export const submitOrderAC = (order: OrderPayload) => ({
  type: SUBMIT_ORDER,
  payload: order,
});

export const toggleIsOrderSubmittingAC = (flag: boolean) => ({
  type: TOGGLE_IS_ORDER_SUBMITTING,
  payload: flag,
});

export const toggleIsProductsFetchingAC = (flag: boolean) => ({
  type: TOGGLE_IS_PRODUCTS_FETCHING,
  payload: flag,
});

export const toggleIsProductAddingAC = (flag: boolean) => ({
  type: TOGGLE_IS_PRODUCT_ADDING,
  payload: flag,
});

export const toggleIsProductRemovingAC = (flag: boolean) => ({
  type: TOGGLE_IS_PRODUCT_REMOVING,
  payload: flag,
});
