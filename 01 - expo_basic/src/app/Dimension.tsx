import { Text, useWindowDimensions } from 'react-native';

export default function () {
  const { width, height } = useWindowDimensions();
  console.log(width, height);

  return <Text>Hello</Text>;
}
