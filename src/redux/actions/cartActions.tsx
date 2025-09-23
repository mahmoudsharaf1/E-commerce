import {Cart} from '@/features/cart/types/cart';

export const SET_CART = 'set-cart';
export const CLEAR_CART = 'clear-cart';

export const setCart = (data: Partial<Cart>) => {
  return {type: SET_CART, payload: data};
};

export const clearCart = () => {
  return {type: CLEAR_CART, payload: null};
};
