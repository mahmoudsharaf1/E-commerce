import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReducerTypes } from '@redux';
import { StorageUtils } from '@utils/storage';
import { STORAGE_KEYS } from '@constants';
import { setToast } from '@redux/actions/toastActions';
import { setCart } from '@redux/actions/cartActions';

import { Cart, Product, createCart as createCartMock,  removeItemFromCart as removeItemFromCartMock, addItemToCart as addItemToCartMock} from '@services';

export const useCart = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cart = useSelector((state: ReducerTypes) => state.cart) as unknown as Cart;


  const getCart = useCallback(() => {
    if (!cart) {
      const newCart = createCartMock();
      dispatch(setCart(newCart));
      StorageUtils.set(STORAGE_KEYS.CART_ID, newCart.id);
    }
  }, [cart, dispatch]);

  const createCart = useCallback(() => {
    if (!cart) {
      const newCart = createCartMock();
      dispatch(setCart(newCart));
      StorageUtils.set(STORAGE_KEYS.CART_ID, newCart.id);
    }
  }, [cart, dispatch]);

  const addItemToCart = useCallback(
    (product: Product, quantity: number = 1) => {
      if (!cart) {
        createCart();
      }
      setIsLoading(true);
      const updatedCart = addItemToCartMock(cart || createCartMock(), product, quantity);
      dispatch(setCart(updatedCart));
      setIsLoading(false);
      dispatch(setToast('Item added to cart successfully', 'success'));
    },
    [cart, dispatch, createCart],
  );

  const removeItemFromCart = useCallback(
    (productId: number) => {
      if (!cart) return;
      setIsLoading(true);
      const updatedCart = removeItemFromCartMock(cart, productId);
      dispatch(setCart(updatedCart));
      setIsLoading(false);
      dispatch(setToast('Item removed from cart successfully', 'success'));
    },
    [cart, dispatch],
  );

  return {
    isLoading,
    getCart,
    cart,
    createCart,
    addItemToCart,
    removeItemFromCart,
  };
};
