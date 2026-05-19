// internal-imports
import OverviewScreen from '@/screens/Overview';
import SettingsScreen from '@/screens/Settings';

// external-imports
import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MyTabs = createBottomTabNavigator({
  screens: {
    Overview: OverviewScreen,
    Settings: SettingsScreen,
  },
});

const Navigation = createStaticNavigation(MyTabs);

export function StaticBottomTabs() {
  return <Navigation />;
}
