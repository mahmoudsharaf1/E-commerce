import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Easing, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Icon, IconTypes, Text} from '@components';
import {ReducerTypes} from '@redux';
import {clearToast} from '@redux/actions/toastActions';
import {useTheme} from '@contexts/ThemeContext';
import {styles} from './styles';

export const Toast = () => {
  const dispatch = useDispatch();
  const {message, status} = useSelector((state: ReducerTypes) => state.toast);
  const {themeColors} = useTheme();
  const _animationValue = useRef(new Animated.Value(0)).current;
  const _timeOutVar = useRef<NodeJS.Timeout | null>(null);
  const paddingTop = 60;

  useEffect(() => {
    if (message) {
      _animationValue.setValue(0);
      Animated.timing(_animationValue, {
        toValue: 1,
        easing: Easing.in(Easing.elastic(2)),
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        _timeOutVar.current = setTimeout(() => {
          Animated.timing(_animationValue, {
            toValue: 0,
            easing: Easing.out(Easing.elastic(2)),
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            dispatch(clearToast());
          });
        }, 4000);
      });
    }
  }, [_animationValue, dispatch, message]);

  const close = () => {
    if (_timeOutVar.current !== null) {
      clearTimeout(_timeOutVar.current);
    }
    Animated.timing(_animationValue, {
      toValue: 0,
      easing: Easing.out(Easing.elastic(2)),
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      dispatch(clearToast());
    });
  };

  const getToastIcon = useCallback(() => {
    switch (status as string) {
      case 'success':
        return 'toastSuccess' as IconTypes;
      case 'warning':
        return 'toastWarning' as IconTypes;
      default:
        return 'toastError' as IconTypes;
    }
  }, [status]);

  return (
    <TouchableWithoutFeedback testID={'Toast'} onPress={close}>
      <Animated.View
        testID={'Toast-Wrapper'}
        style={[
          styles.mainContainer,
          {
            backgroundColor: themeColors.background.card,
            opacity: _animationValue,
            top: 0,
            transform: [
              {
                translateY: _animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-paddingTop, paddingTop],
                }),
              },
            ],
          },
        ]}>
        <Icon testID={'Toast-Icon'} name={getToastIcon()} />
        <Text testID={'Toast-Text'} style={styles.text}>
          {message}{' '}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
