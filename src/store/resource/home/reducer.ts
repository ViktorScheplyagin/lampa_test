import { Action } from 'redux';
import { ProductPayload } from 'store/entities/model';
import {
  FETCH_NEW_PRODUCTS,
  TOGGLE_IS_PRODUCTS_FETCHING,
} from 'store/resource/home/actions';

type StateType = {
  products: ProductPayload[];
  isProductsFetching: boolean;
  isProductsAddingToCart: boolean;
};

type ActionType = Action & { payload: any };

const initialState: StateType = {
  products: [],
  isProductsFetching: false,
  isProductsAddingToCart: false,
};

const homeReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_NEW_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case TOGGLE_IS_PRODUCTS_FETCHING:
      return {
        ...state,
        isProductsFetching: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
