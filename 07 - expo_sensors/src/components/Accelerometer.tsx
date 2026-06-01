import { Text, View } from 'react-native';
import useAccelerometer from '../hooks/use-accelerometer';

export default function AccelerometerDisplay() {
  const { available, x, y, z } = useAccelerometer();
  return (
    <View>
      <Text>Accelerometer</Text>
      <Text>Available: {available ? 'Yes' : 'No'}</Text>
      <Text>x: {x.toFixed(2)}</Text>
      <Text>y: {y.toFixed(2)}</Text>
      <Text>z: {z.toFixed(2)}</Text>
    </View>
  );
}
