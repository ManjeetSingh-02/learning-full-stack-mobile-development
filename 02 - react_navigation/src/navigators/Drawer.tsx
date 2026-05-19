// internal-imports
import ProfileScreen from '@/screens/Profile';
import UserScreen from '@/screens/User';

// external-imports
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen
        name="User"
        component={UserScreen}
        initialParams={{
          username: 'Guest',
        }}
      />
    </Drawer.Navigator>
  );
}

export default function DynamicDrawer() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
