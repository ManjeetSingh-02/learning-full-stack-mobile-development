import { AuthProvider, useAuth } from '@/context/auth.context';
import { Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const { user, isReady } = useAuth();

  if (!isReady) return <ActivityIndicator size='large' />;

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={user === null}>
          <Stack.Screen name='(auth)/login' />
        </Stack.Protected>

        <Stack.Protected guard={user !== null}>
          <Stack.Screen name='index' />
        </Stack.Protected>
      </Stack>
    </AuthProvider>
  );
}
