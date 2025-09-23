import {CLEAR_TOAST, SET_TOAST} from '../actions/toastActions';

export type Toast = {
  message: string;
  status: 'success' | 'danger' | 'warning';
};

const initialState: Toast = {
  message: '',
  status: 'success',
};

export const toastReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TOAST:
      return {...state, ...action.payload};
    case CLEAR_TOAST:
      return {...initialState};
    default:
      return state;
  }
};
