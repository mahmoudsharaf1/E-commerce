import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';
import {setToast} from '@redux/actions/toastActions';

export const InternetListener = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Function to check internet connection
    const checkInternetConnection = async () => {
      try {
        const state = await NetInfo.fetch();
        // console.log('state.isInternetReachable', state);
        if (state.isInternetReachable === false) {
          dispatch(setToast(t('general.messages.26'), 'warning'));
        }
      } catch (error) {
        console.error('Error checking internet connection:', error);
      }
    };

    // Start the interval
    intervalRef.current = setInterval(checkInternetConnection, 20000); // 20 seconds

    // Initial check to avoid waiting 20 seconds on first load
    checkInternetConnection();

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [dispatch, t]);

  return null;
};
