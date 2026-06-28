import { AuthProvider } from '@/context/auth.context';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const isLoggedIn = false;

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name='(auth)/login' />
        </Stack.Protected>

        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name='index' />
        </Stack.Protected>
      </Stack>
    </AuthProvider>
  );
}
