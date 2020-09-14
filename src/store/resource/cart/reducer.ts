import { Action } from "redux";
import { ProductPayload } from "services/api/products/model";
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./actions"


type StateType = { items: ProductPayload[]; };

type ActionType = Action & { payload: ProductPayload; };


const initialState: StateType = {
  items: [],
};

const cartReducer = (state = initialState, action: ActionType) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_PRODUCT_FROM_CART:
      const { items } = state;
      const targetIdx = items.indexOf(action.payload);

      return {
        ...state,
        items: items.filter((item, idx) => idx !== targetIdx)
      };
    default:
      return state;
  };
};

export default cartReducer;