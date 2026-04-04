import React,{FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { screenNames } from './_screenNames';
import LandingPage from '../screens/LandingPage/LandingPage';


const Stack = createNativeStackNavigator();
/**
 * Unauthenticated users navigation stack.
 */
const UnauthRoutes: FC = ()=>{
    return (
        <Stack.Navigator
        initialRouteName={screenNames.LANDING_PAGE}
        screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name={screenNames.LANDING_PAGE} component={LandingPage}  />
        </Stack.Navigator>
    );
};
export default UnauthRoutes;
