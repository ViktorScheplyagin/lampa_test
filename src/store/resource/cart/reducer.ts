import { ProductPayload } from 'store/entities/model';
import {
  ADD_PRODUCT_TO_CART,
  FETCH_CART_ITEMS,
  REMOVE_PRODUCT_FROM_CART,
  TOGGLE_IS_ORDER_SUBMITTING,
  TOGGLE_IS_PRODUCTS_FETCHING,
  TOGGLE_IS_PRODUCT_ADDING,
  TOGGLE_IS_PRODUCT_REMOVING,
} from './actions';

type StateType = {
  items: ProductPayload[];
  isOrderSubmitting: boolean;
  isProductsFetching: boolean;
  isProductAdding: boolean;
  isProductRemoving: boolean;
};

type ActionType = {
  type: string;
  payload: any;
};

const initialState: StateType = {
  items: [],
  isOrderSubmitting: false,
  isProductsFetching: false,
  isProductAdding: false,
  isProductRemoving: false,
};

const cartReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_PRODUCT_FROM_CART:
      const { items } = state;
      const targetIdx = items.indexOf(action.payload);

      return {
        ...state,
        items: items.filter((item, idx) => idx !== targetIdx),
      };

    case FETCH_CART_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case TOGGLE_IS_ORDER_SUBMITTING:
      return {
        ...state,
        isOrderSubmitting: action.payload,
      };

    case TOGGLE_IS_PRODUCTS_FETCHING:
      return {
        ...state,
        isProductsFetching: action.payload,
      };

    case TOGGLE_IS_PRODUCT_ADDING:
      return {
        ...state,
        isProductAdding: action.payload,
      };

    case TOGGLE_IS_PRODUCT_REMOVING:
      return {
        ...state,
        isProductRemoving: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
