import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Button title="Camera Photo" onPress={() => router.push('/camera_photo')} />
      <Button title="Camera Video" onPress={() => router.push('/camera_video')} />
      <Button title="Camera Barcode" onPress={() => router.push('/camera_barcode')} />
      <Button title="Audio Player" onPress={() => router.push('/audio_player')} />
      <Button title="Audio Recorder" onPress={() => router.push('/audio_recorder')} />
      <Button title="Network" onPress={() => router.push('/network')} />
      <Button title="Battery" onPress={() => router.push('/battery')} />
    </View>
  );
}
