export const CLEAR_TOAST = 'clear-toast';
export const SET_TOAST = 'set-toast';

export const setToast = (
  message: string,
  status: 'danger' | 'warning' | 'success',
): {type: string; payload: any} => {
  return {type: SET_TOAST, payload: {message, status}};
};

export const clearToast = () => {
  return {type: CLEAR_TOAST};
};
