// internal-imports
import OverviewScreen from '@/screens/Overview';
import SearchScreen from '@/screens/Search';
import SettingsScreen from '@/screens/Settings';

// external-imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const MyTabs = createBottomTabNavigator();

export function DynamicBottomTabs() {
  return (
    <NavigationContainer>
      <MyTabs.Navigator
        initialRouteName="Search"
        screenOptions={({ route }) => ({
          // headerShown: false,
          tabBarStyle: {
            height: 65,
          },
          tabBarActiveTintColor: 'orange',
          tabBarActiveBackgroundColor: 'green',
          tabBarInactiveBackgroundColor: 'yellow',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={
                route.name === 'Overview'
                  ? focused
                    ? 'home'
                    : 'home-outline'
                  : route.name === 'Search'
                    ? focused
                      ? 'search'
                      : 'search-outline'
                    : focused
                      ? 'settings'
                      : 'settings-outline'
              }
              size={size}
              color={color}
            />
          ),
        })}
      >
        <MyTabs.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            title: 'Dashboard',
            tabBarLabel: 'My Dashboard',
          }}
        />
        <MyTabs.Screen name="Search" component={SearchScreen} options={{ tabBarBadge: 3 }} />
        <MyTabs.Screen name="Settings" component={SettingsScreen} options={{ tabBarBadge: 13 }} />
      </MyTabs.Navigator>
    </NavigationContainer>
  );
}
