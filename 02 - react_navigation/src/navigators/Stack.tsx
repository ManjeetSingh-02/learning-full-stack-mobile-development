// internal-imports
import DetailsScreen from '@/screens/Details';
import HomeScreen from '@/screens/Home';
import ProfileScreen from '@/screens/Profile';
import UserScreen from '@/screens/User';

// external-imports
import { createStaticNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// stack navigator for screens
const RootStack = createStackNavigator({
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

// static stack navigation for screens
export const StaticStackNavigation = createStaticNavigation(RootStack);
