import { Slot } from 'expo-router';
import { Text, View } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <Text style={{ borderColor: 'red', borderWidth: 2, padding: 4 }}>Auth Header</Text>
      <Slot />
      <Text style={{ borderColor: 'red', borderWidth: 2, padding: 4 }}>Auth Footer</Text>
    </View>
  );
}
