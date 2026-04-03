import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screenNames } from "./_screenNames";

import {StyleSheet, View } from "react-native";
import Herd from "../screens/Herd/Herd";
import AddNewCow from "../screens/AddNewCow/AddNewCow";
import Event from "../screens/Event/Event";
import Inventory from "../screens/Inventory/Inventory";
import Insight from "../screens/Insight/Insight";

/**
 * Authenticated users navigation stack.
 */

// ----------------- Main Routes
const Stack = createNativeStackNavigator();
const AuthRoutes: FC = () => {

  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName={
          screenNames.TAB_NAVIGATOR
        }
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={screenNames.TAB_NAVIGATOR} component={TabNavigator} />
        <Stack.Screen name={screenNames.ADD_NEW_COW} component={AddNewCow} />
   
      </Stack.Navigator>
    </View>
  );
};

//------------------- Sub Routes (Tab Navigator)
const Tab = createBottomTabNavigator();
const TabNavigator: FC = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          animation: "shift",
        })}
      >
        <Tab.Screen name={screenNames.HERD} component={Herd} />
        <Tab.Screen name={screenNames.EVENT} component={Event} />
        <Tab.Screen name={screenNames.INVENTORY} component={Inventory} />
        <Tab.Screen name={screenNames.INSIGHT} component={Insight} />

      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
export default AuthRoutes;
