import { BetterAuthPanel } from '@/components/better-auth-panel';
import { useAuth } from '@/context/auth.context';
import { View, StyleSheet, Button, Text } from 'react-native';

export default function Login() {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Text>For Expo-Auth-Session</Text>
      <Button
        title='Login with Google'
        onPress={() => signIn('google')}
      />
      <Button
        title='Login with GitHub'
        onPress={() => signIn('github')}
      />
      <Text>For Better-Auth</Text>
      <BetterAuthPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
