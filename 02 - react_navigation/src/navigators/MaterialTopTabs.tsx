// internal-imports
import ProfileScreen from '@/screens/Profile';
import UserScreen from '@/screens/User';

// external-imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Profile" tabBarPosition="bottom">
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="User"
        component={UserScreen}
        initialParams={{
          username: 'Guest',
        }}
      />
    </Tab.Navigator>
  );
}

export default function DynamicMaterialTopTabs() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
