import { View, StyleSheet } from 'react-native';
import AccelerometerDisplay from '../components/Accelerometer';
import GyroscopeDisplay from '../components/Gyroscope';
import LightSensorDisplay from '../components/LightSensor';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <AccelerometerDisplay /> */}
      {/* <GyroscopeDisplay /> */}
      <LightSensorDisplay />
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
