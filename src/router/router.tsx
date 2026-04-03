import React from 'react';
import UnauthRoutes from './UnauthRoutes';
import AuthRoutes from './AuthRoutes';
import {useSelector} from 'react-redux';

const Router = () => {
  let loggedIn = useSelector((state: any) => state?.auth?.loggedIn);
 
  return loggedIn ? <AuthRoutes /> : <UnauthRoutes />;
};

export default Router;
