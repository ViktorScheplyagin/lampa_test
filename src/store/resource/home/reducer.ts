import { Action } from "redux";
import { getProducts } from "services/api/products";
import { ProductPayload } from "services/api/products/model";
import { FETCH_NEW_PRODUCTS } from "store/resource/home/actions";


type StateType = { products: ProductPayload[]; };

type ActionType = Action & { payload: ProductPayload[]; };


const initialState: StateType = { products: [] };

const homeReducer = (state = initialState, action: ActionType) => {
  switch(action.type) {
    case FETCH_NEW_PRODUCTS:
      return {
        ...state,
        products: getProducts(),
      };
    default:
      return state;
  }
};

export default homeReducer;