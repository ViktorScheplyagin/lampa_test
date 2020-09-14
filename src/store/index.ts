import { createStore, combineReducers } from "redux";
import cartReducer from "./resource/cart/reducer";
import homeReducer from './resource/home/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default store;