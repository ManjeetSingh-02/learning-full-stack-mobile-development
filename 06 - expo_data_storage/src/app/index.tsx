import { StyleSheet, View } from 'react-native';
import AsyncStorageExample from '@/storages/async-storage';
import SecureStoreExample from '@/storages/secure-store';
import SQLiteStorageExample from '@/storages/sqlite-storage';
import FileSystemStorageExample from '@/storages/file-system';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <AsyncStorageExample /> */}
      {/* <SecureStoreExample /> */}
      {/* <SQLiteStorageExample /> */}
      <FileSystemStorageExample />
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
