import { View, StyleSheet } from 'react-native';
import AccelerometerDisplay from '../components/Accelerometer';
import GyroscopeDisplay from '../components/Gyroscope';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <AccelerometerDisplay /> */}
      <GyroscopeDisplay />
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
