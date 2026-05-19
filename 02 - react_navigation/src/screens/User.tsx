// external-imports
import { Text, View } from 'react-native';

export default function UserScreen({ route }: any) {
  // destructure params from route
  const { username } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Text>{username}</Text>
    </View>
  );
}
