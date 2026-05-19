import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: '#6366f1',
        drawerInactiveTintColor: '#9ca3af',
        drawerStyle: { backgroundColor: '#fff', width: 240 },
      }}
    >
      <Drawer.Screen
        name='index'
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          drawerIcon: ({ color }: any) => (
            <Ionicons
              name='home-outline'
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='explore'
        options={{
          drawerLabel: 'Explore',
          title: 'Explore',
          drawerIcon: ({ color }: any) => (
            <Ionicons
              name='compass-outline'
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='about'
        options={{
          drawerLabel: 'About',
          title: 'about',
          drawerIcon: ({ color }: any) => (
            <Ionicons
              name='information-circle-outline'
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
}
