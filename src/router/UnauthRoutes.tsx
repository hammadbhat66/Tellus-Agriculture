import React,{FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { screenNames } from './_screenNames';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import GettingStarted from '../screens/GettingStarted/GettingStarted';


const Stack = createNativeStackNavigator();
/**
 * Unauthenticated users navigation stack.
 */
const UnauthRoutes: FC = ()=>{
    return (
        <Stack.Navigator
        initialRouteName={screenNames.SPLASH_SCREEN}
        screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name={screenNames.SPLASH_SCREEN} component={SplashScreen}  />
            <Stack.Screen name={screenNames.GETTING_STARTED} component={GettingStarted}  />
        </Stack.Navigator>
    );
};
export default UnauthRoutes;
