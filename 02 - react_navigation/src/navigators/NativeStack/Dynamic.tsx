// internal-imports
import DetailsScreen from '@/screens/Details';
import HomeScreen from '@/screens/Home';
import ProfileScreen from '@/screens/Profile';
import UserScreen from '@/screens/User';

// external-imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// native stack navigator for screens
const RootStack = createNativeStackNavigator();

// dynamic native stack navigation for screens
export function DynamicNativeStackNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // headerShown: false,
            title: 'Overview',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontSize: 12, fontWeight: 'bold' },
          }}
        />
        <RootStack.Screen name="Details" component={DetailsScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen
          name="User"
          component={UserScreen}
          initialParams={{ username: 'Guest' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
