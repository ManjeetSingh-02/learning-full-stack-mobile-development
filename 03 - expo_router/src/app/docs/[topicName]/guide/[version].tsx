import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function VersionScreen() {
  // get the topicName from useLocalSearchParams
  const { topicName, version } = useLocalSearchParams();

  return (
    <View>
      <Text>Guide for topic: {topicName}</Text>
      <Text>version: {version}</Text>
    </View>
  );
}
