// external-imports
import { Button } from '@react-navigation/elements';
import { Link, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  // navigation hook to navigate programmatically if needed
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Text>Home Screen</Text>
      {/* @ts-ignore */}
      <Button screen="Details">Go to Details Screen via Button Component</Button>
      {/* @ts-ignore */}
      <Link screen="Details">Go to Details Screen via Link Component</Link>
      {/* @ts-ignore */}
      <Button onPressIn={() => navigation.navigate('Details')}>
        Go to Details Screen via useNavigate Hook
      </Button>
    </View>
  );
}
