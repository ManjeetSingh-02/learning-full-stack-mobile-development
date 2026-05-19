// external-imports
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function DetailsScreen() {
  // navigation hook to navigate programmatically if needed
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('User', { username: 'John' })}>
        Go To User Screen with props
      </Button>
      <Button onPress={() => navigation.navigate('User')}>Go To User Screen without props</Button>
    </View>
  );
}
