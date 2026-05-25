import { View, StyleSheet } from 'react-native';
import AsyncStorageExample from '@/storages/async-storage';
import SecureStoreExample from '@/storages/secure-store';

export default function Index() {
  return (
    <View style={styles.container}>
      <AsyncStorageExample />
      <SecureStoreExample />
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
