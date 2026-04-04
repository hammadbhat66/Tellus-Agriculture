import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screenNames } from './_screenNames';

import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import color from '../utils/theme/colors';
import Herd from '../screens/Herd/Herd';
import AddNewCow from '../screens/AddNewCow/AddNewCow';
import Event from '../screens/Event/Event';
import Inventory from '../screens/Inventory/Inventory';
import Insight from '../screens/Insight/Insight';
import CowDetails from '../screens/CowDetails/CowDetails';
import {
  EventsIcon,
  HerdIcon,
  InsightsIcon,
  InventoryIcon,
} from '../assets/icons/icons';

/**
 * Authenticated users navigation stack.
 */

// ----------------- Main Routes
const Stack = createNativeStackNavigator();
const AuthRoutes: FC = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName={screenNames.TAB_NAVIGATOR}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={screenNames.TAB_NAVIGATOR}
          component={TabNavigator}
        />
        <Stack.Screen name={screenNames.ADD_NEW_COW} component={AddNewCow} options={{presentation:"fullScreenModal"}} />
        <Stack.Screen name={screenNames.COW_DETAILS} component={CowDetails} />
      </Stack.Navigator>
    </View>
  );
};

//------------------- Sub Routes (Tab Navigator)
const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, navigation }: any) => {
  const tabs = [
    { name: screenNames.HERD, icon: HerdIcon, label: 'Herd' },
    { name: screenNames.EVENT, icon: EventsIcon, label: 'Events' },
    { name: screenNames.INVENTORY, icon: InventoryIcon, label: 'Inventory' },
    { name: screenNames.INSIGHT, icon: InsightsIcon, label: 'Insights' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: tab.name,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name);
          }
        };

        return (
          <Pressable
            key={tab.name}
            style={[styles.tabItem, isFocused && styles.tabItemActive]}
            onPress={onPress}
          >
            <Image source={tab.icon} />
            <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const TabNavigator: FC = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={() => ({
          headerShown: false,
          animation: 'shift',
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
  container: { flex: 1, backgroundColor: color.surface },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(243, 243, 243, 0.2)',
    paddingBottom: 34,
    paddingTop: 12,
    paddingHorizontal: 16,
    shadowColor: color.onSurface,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 12,
    marginHorizontal: 2,
  },
  tabItemActive: {
    backgroundColor: color.primaryFixed,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: color.onSurfaceVariant,
    fontFamily: 'System',
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    marginTop: 4,
  },
  tabLabelActive: {
    color: color.primary,
  },
});
export default AuthRoutes;
