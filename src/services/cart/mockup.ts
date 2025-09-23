import { Cart, Product, CartItem } from './types';

export const baseCart: Cart = {
  id: 0,
  total: 0,
  subtotal: 0,
  tax_total: 0,
  discount_total: 0,
  discount_subtotal: 0,
  discount_tax_total: 0,
  original_total: 0,
  original_tax_total: 0,
  items: [],
  promotions: [],
};

export const createCart = (): Cart => ({ ...baseCart });

export const addItemToCart = (cart: Cart, product: Product, quantity = 1): Cart => {
  const cartItems = cart.items || [];
  const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id);
  
  if (existingItemIndex !== -1) {
    const updatedItems = [...cartItems];
    const existingItem = updatedItems[existingItemIndex];
    const newQuantity = existingItem.quantity + quantity;
    const newTotalPrice = product.price * newQuantity;
    
    updatedItems[existingItemIndex] = {
      ...existingItem,
      quantity: newQuantity,
      total_price: newTotalPrice,
    };
    
    return {
      ...cart,
      items: updatedItems,
      total: cart.total + (product.price * quantity),
      subtotal: cart.subtotal + (product.price * quantity),
      original_total: cart.original_total + (product.price * quantity),
    };
  }
  
  const total_price = product.price * quantity;
  
  const newItem: CartItem = {
    product: product,
    quantity: quantity,
    unit_price: product.price,
    total_price: total_price,
  };
  
  const newCart: Cart = {
    ...cart,
    items: [...cartItems, newItem],
    total: cart.total + total_price,
    subtotal: cart.subtotal + total_price,
    original_total: cart.original_total + total_price,
  };
  
  return newCart;
};

export const removeItemFromCart = (cart: Cart, productId: number): Cart => {
  const cartItems = cart.items || [];
  const itemToRemove = cartItems.find(item => item.product.id === productId);
  if (!itemToRemove) return cart;
  
  const newCart: Cart = {
    ...cart,
    items: cartItems.filter(item => item.product.id !== productId),
    total: cart.total - itemToRemove.total_price,
    subtotal: cart.subtotal - itemToRemove.total_price,
    original_total: cart.original_total - itemToRemove.total_price,
  };
  
  return newCart;
};

export const updateItemQuantity = (cart: Cart, productId: number, newQuantity: number): Cart => {
  if (newQuantity <= 0) {
    return removeItemFromCart(cart, productId);
  }
  
  const cartItems = cart.items || [];
  const itemIndex = cartItems.findIndex(item => item.product.id === productId);
  if (itemIndex === -1) return cart;
  
  const updatedItems = [...cartItems];
  const item = updatedItems[itemIndex];
  const oldTotalPrice = item.total_price;
  const newTotalPrice = item.unit_price * newQuantity;
  
  updatedItems[itemIndex] = {
    ...item,
    quantity: newQuantity,
    total_price: newTotalPrice,
  };
  
  return {
    ...cart,
    items: updatedItems,
    total: cart.total - oldTotalPrice + newTotalPrice,
    subtotal: cart.subtotal - oldTotalPrice + newTotalPrice,
    original_total: cart.original_total - oldTotalPrice + newTotalPrice,
  };
};