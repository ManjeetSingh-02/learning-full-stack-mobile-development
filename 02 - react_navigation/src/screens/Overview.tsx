import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';

export default function OverviewScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Overview Screen</Text>
      <Button onPress={() => navigation.navigate('Settings')}>Go to Settings</Button>
    </View>
  );
}
