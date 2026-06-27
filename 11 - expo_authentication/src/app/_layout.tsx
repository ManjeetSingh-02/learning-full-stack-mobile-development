import { Stack } from 'expo-router';

export default function RootLayout() {
  const isLoggedIn = false;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name='login' />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name='index' />
      </Stack.Protected>
    </Stack>
  );
}
