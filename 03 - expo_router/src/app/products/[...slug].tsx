import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProductIDScreen() {
  // get the slug using useLocalSearchParams
  const { slug } = useLocalSearchParams();

  return (
    <View>
      <Text>Slug: {Array.isArray(slug) && slug.join(' / ')}</Text>
    </View>
  );
}
