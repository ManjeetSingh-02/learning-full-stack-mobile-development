import { StyleSheet, View } from 'react-native';
import AsyncStorageExample from '@/storages/async-storage';
import SecureStoreExample from '@/storages/secure-store';
import SQLiteStorageExample from '@/storages/sqlite-storage';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <AsyncStorageExample />
      <SecureStoreExample /> */}
      <SQLiteStorageExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
