import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from './resource/cart/reducer';
import homeReducer from './resource/home/reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default store;
