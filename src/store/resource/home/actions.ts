import { ProductPayload } from 'store/entities/model';

export const FETCH_NEW_PRODUCTS = 'FETCH_NEW_PRODUCTS';
export const TOGGLE_IS_PRODUCTS_FETCHING = 'TOGGLE_IS_PRODUCTS_FETCHING';
export const TOGGLE_IS_PRODUCT_ADDING_TO_CART = 'TOGGLE_IS_PRODUCT_ADDING_TO_CART';

export const fetchNewProductsAC = (products: ProductPayload[]) => ({
  type: FETCH_NEW_PRODUCTS,
  payload: products,
});

export const toggleIsProductsFetchingAC = (flag: boolean) => ({
  type: TOGGLE_IS_PRODUCTS_FETCHING,
  payload: flag,
});
