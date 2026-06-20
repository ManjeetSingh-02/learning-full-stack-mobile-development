import { useRouter } from 'expo-router';
import { View, StyleSheet, Button } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title='Local Notification'
        onPress={() => router.push('/local')}
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
