import { CameraView, useCameraPermissions, useMicrophonePermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function CameraVideo() {
  const cameraRef = useRef<CameraView>(null);
  const [isReady, setIsReady] = useState(false);
  const [position, setPosition] = useState<'front' | 'back'>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [videoURI, setVideoURI] = useState<string | null>(null);

  async function startRecording() {
    if (!micPermission?.granted) {
      const result = await requestMicPermission();
      if (!result.granted) return;
    }

    setIsRecording(true);
    const video = await cameraRef.current?.recordAsync({ maxDuration: 10 });
    if (video?.uri) setVideoURI(video.uri);
    setIsRecording(false);
  }

  function stopRecording() {
    cameraRef.current?.stopRecording();
    setIsRecording(false);
  }

  return (
    <View
      style={{
        flex: 1,
        borderColor: isReady ? 'green' : 'red',
        borderWidth: 4,
      }}
    >
      {!permission ? (
        <View>
          <Text>Requesting camera permission...</Text>
        </View>
      ) : !permission.granted ? (
        <View>
          <Text>Camera permission is not granted.</Text>
          <Button title="Grant Permission" onPress={requestPermission} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <CameraView
            ref={cameraRef}
            style={{ flex: 1 }}
            mode="video"
            facing={position}
            onCameraReady={() => setIsReady(true)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
            }}
          >
            <Button
              title="Switch"
              onPress={() => setPosition(position === 'back' ? 'front' : 'back')}
              disabled={!isReady || isRecording}
            />
            <Button
              title={isRecording ? 'Stop' : 'Start'}
              onPress={isRecording ? stopRecording : startRecording}
              disabled={!isReady}
            />
            <Button
              title="Clear"
              onPress={() => setVideoURI(null)}
              disabled={!isReady || !videoURI}
            />
          </View>
          {videoURI && <Text selectable>{videoURI}</Text>}
        </View>
      )}
    </View>
  );
}
