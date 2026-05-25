import { View, StyleSheet } from 'react-native';
import AsyncStorageExample from '../storages/async-storage';

export default function Index() {
  return (
    <View style={styles.container}>
      <AsyncStorageExample />
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
