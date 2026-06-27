import { View, StyleSheet, Button } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Button title='Login with Google' />
      <Button title='Login with GitHub' />
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
