// internal-imports
import UserScreen from '@/screens/User';
import SearchScreen from '@/screens/Search';
import SettingsScreen from '@/screens/Settings';
import ProfileScreen from '@/screens/Profile';

// external-imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="User"
        component={UserScreen}
        initialParams={{
          username: 'Guest',
        }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'orange',
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
      <Tab.Screen name="Overview" component={MyStackScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export function DynamicBottomTabsWithStack() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
