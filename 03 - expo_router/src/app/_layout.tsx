import { Slot } from 'expo-router';
import { Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Text style={{ borderColor: 'black', borderWidth: 2, padding: 4 }}>Header</Text>
      <Slot />
      <Text style={{ borderColor: 'black', borderWidth: 2, padding: 4 }}>Footer</Text>
    </View>
  );
}
