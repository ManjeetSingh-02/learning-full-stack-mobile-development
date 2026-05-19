import { Slot, Stack } from 'expo-router';
import { Text, View } from 'react-native';

// export default function RootLayout() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
//       <Text style={{ borderColor: 'black', borderWidth: 2, padding: 4 }}>Header</Text>
//       <Slot />
//       <Text style={{ borderColor: 'black', borderWidth: 2, padding: 4 }}>Footer</Text>
//     </View>
//   );
// }

export default function RootLayout() {
  const isLoggedIn = false;

  return (
    <Stack>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen
          name='(auth)'
          options={{ headerShown: false }}
        />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name='index' />
      </Stack.Protected>
    </Stack>
  );
}
