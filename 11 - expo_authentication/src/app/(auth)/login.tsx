import { useAuth } from '@/context/auth.context';
import { View, StyleSheet, Button } from 'react-native';

export default function Login() {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title='Login with Google'
        onPress={() => signIn('google')}
      />
      <Button
        title='Login with GitHub'
        onPress={() => signIn('github')}
      />
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
