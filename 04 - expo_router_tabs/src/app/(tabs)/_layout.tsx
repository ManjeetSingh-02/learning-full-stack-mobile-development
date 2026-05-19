import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    // <JS_Tabs />
    <Native_Tabs />
  );
}

function JS_Tabs() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='home'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='compass'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='information'
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

function Native_Tabs() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name='index'>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf='house.fill'
          md='home'
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='explore'>
        <NativeTabs.Trigger.Icon
          sf='safari'
          md='explore'
        />
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='about'>
        <NativeTabs.Trigger.Icon
          sf='info.circle.fill'
          md='info'
        />
        <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
