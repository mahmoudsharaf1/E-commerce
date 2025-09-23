import {useState} from 'react';

export const useProduct = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return {
    onRefresh,
    refreshing,
  };
};
