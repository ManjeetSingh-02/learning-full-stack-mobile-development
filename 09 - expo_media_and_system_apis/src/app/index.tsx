import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Button title="Camera Photo" onPress={() => router.push('/camera_photo')} />
      <Button title="Camera Video" onPress={() => router.push('/camera_video')} />
    </View>
  );
}
