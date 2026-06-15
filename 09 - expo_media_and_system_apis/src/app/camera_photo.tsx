import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';

export default function CameraPhoto() {
  const cameraRef = useRef<CameraView>(null);
  const [isReady, setIsReady] = useState(false);
  const [position, setPosition] = useState<'front' | 'back'>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photoURI, setPhotoURI] = useState<string | null>(null);

  async function takePhoto() {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) setPhotoURI(photo.uri);
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
              disabled={!isReady}
            />
            <Button title="Click" onPress={takePhoto} disabled={!isReady} />
            <Button
              title="Clear"
              onPress={() => setPhotoURI(null)}
              disabled={!isReady || !photoURI}
            />
          </View>
          {photoURI && (
            <Image
              source={{ uri: photoURI }}
              style={{
                width: 200,
                height: 200,
                marginTop: 10,
              }}
            />
          )}
        </View>
      )}
    </View>
  );
}
