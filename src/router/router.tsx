import React, { useCallback, useEffect, useState } from 'react';
import UnauthRoutes from './UnauthRoutes';
import AuthRoutes from './AuthRoutes';
import { useSelector } from 'react-redux';
import NoInternetAlert from '../sharedComponents/NoInternetAlert';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
const Router = () => {
  const [offline, setOffline] = useState(false);
  let loggedIn = useSelector((state: any) => state?.auth?.loggedIn);
  const changeVisible = useCallback((value: boolean) => {
    setOffline(value);
  }, []);
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const isOffline = !(
          state.isInternetReachable === true ||
          state.isInternetReachable === null
        );
        if (isOffline) {
          setOffline(true);
        } else {
          setOffline(false);
        }
      },
    );
    return () => removeNetInfoSubscription();
  }, []);

  return (
    <>
      {loggedIn ? <AuthRoutes /> : <UnauthRoutes />}
      <NoInternetAlert visible={offline} setVisible={changeVisible} />
    </>
  );
};

export default Router;
