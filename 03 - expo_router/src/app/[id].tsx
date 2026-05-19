import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function UserIDScreen() {
  // get the id using useLocalSearchParams
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>UserID: {id}</Text>
    </View>
  );
}
