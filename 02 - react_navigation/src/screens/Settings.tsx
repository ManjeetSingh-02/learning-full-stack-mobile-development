import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';

export default function SettingsScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.navigate('Overview')}>Go to Overview</Button>
    </View>
  );
}
