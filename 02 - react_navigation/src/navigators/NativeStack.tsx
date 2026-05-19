// internal-imports
import DetailsScreen from '@/screens/Details';
import HomeScreen from '@/screens/Home';
import ProfileScreen from '@/screens/Profile';
import UserScreen from '@/screens/User';

// external-imports
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// native stack navigator for screens
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
    Profile: ProfileScreen,
    User: {
      screen: UserScreen,
      initialParams: { username: 'Guest' },
    },
  },
});

// static native stack navigation for screens
export const StaticNativeStackNavigation = createStaticNavigation(RootStack);
