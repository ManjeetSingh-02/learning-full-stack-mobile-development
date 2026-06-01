import { View, StyleSheet } from 'react-native';
import AccelerometerDisplay from '../components/Accelerometer';

export default function Index() {
  return (
    <View style={styles.container}>
      <AccelerometerDisplay />
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
