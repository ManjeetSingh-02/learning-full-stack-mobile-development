import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function GuideScreen() {
  // get the topicName from useLocalSearchParams
  const { topicName } = useLocalSearchParams();

  return (
    <View>
      <Text>Guide for topic: {topicName}</Text>
    </View>
  );
}
