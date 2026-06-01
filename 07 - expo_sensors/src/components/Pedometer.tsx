import { Text, View } from 'react-native';
import usePedometer from '../hooks/use-pedometer';

export default function PedometerScreen() {
  const { available, data } = usePedometer();
  return (
    <View>
      <Text>Available: {available ? 'yes' : 'no'}.</Text>
      <Text>Steps: {data.steps}</Text>
    </View>
  );
}
