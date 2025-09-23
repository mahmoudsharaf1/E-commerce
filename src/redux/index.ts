import { combineReducers } from "redux";
import { CLEAR_REDUCER } from "./actions/clearAction";
import {Toast, toastReducer} from './reducers/toastReducer';
import {cartReducer} from './reducers/cartReducer';
import { Cart } from "@features/cart/types/cart";

export type ReducerTypes = {
  toast: Toast;
  cart: Cart;
};

const appReducer = combineReducers({
  toast: toastReducer,
  cart: cartReducer,

});

const RootReducer = (state: any, action: any) => {
  if (action.type === CLEAR_REDUCER) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default RootReducer;
