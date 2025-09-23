import {SET_CART, CLEAR_CART} from '@redux/actions/cartActions';
import {Cart} from '@/features/cart/types/cart';

const initialState: Cart = {
  id: 0,
  title: '',
  slug: '',
  price: 0,
  description: '',
  category: {
    id: 0,
    name: '',
    slug: '',
    image: '',
    creationAt: '',
    updatedAt: '',
  },
  images: [],
  creationAt: '',
  updatedAt: '',
};

export const cartReducer = (state = initialState, action: any): Cart => {
  switch (action.type) {
    case SET_CART:
      return {...action.payload};
    case CLEAR_CART:
      return {...initialState};
    default:
      return state;
  }
};
