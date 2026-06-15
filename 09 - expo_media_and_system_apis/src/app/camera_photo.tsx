import { CameraView, useCameraPermissions, type FlashMode } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';

export default function CameraPhoto() {
  const cameraRef = useRef<CameraView>(null);
  const [isReady, setIsReady] = useState(false);
  const [position, setPosition] = useState<'front' | 'back'>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [zoom, setZoom] = useState(0);
  const [photoURI, setPhotoURI] = useState<string | null>(null);
  const [flash, setFlash] = useState<FlashMode>('off');
  const [torch, setTorch] = useState(false);

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
            zoom={zoom}
            mirror={position === 'front'}
            onCameraReady={() => setIsReady(true)}
            flash={flash}
            enableTorch={torch}
          />
          <View style={{ padding: 10, gap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button
                title={`Flash: ${flash}`}
                onPress={() => setFlash(f => (f === 'off' ? 'on' : f === 'on' ? 'auto' : 'off'))}
                disabled={!isReady}
              />
              <Button
                title="Flip"
                onPress={() => setPosition(position === 'back' ? 'front' : 'back')}
                disabled={!isReady}
              />
              <Button
                title={`Torch: ${torch ? 'On' : 'Off'}`}
                onPress={() => setTorch(prev => !prev)}
                disabled={!isReady}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <Button title="Click" onPress={takePhoto} disabled={!isReady} />
              <Button
                title="Clear"
                onPress={() => setPhotoURI(null)}
                disabled={!isReady || !photoURI}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button
                title="Zoom -"
                onPress={() => setZoom(prev => Math.max(0, prev - 0.1))}
                disabled={!isReady || zoom <= 0}
              />
              <Text>Zoom: {Math.round(zoom * 100)}%</Text>
              <Button
                title="Zoom +"
                onPress={() => setZoom(prev => Math.min(1, prev + 0.1))}
                disabled={!isReady || zoom >= 1}
              />
            </View>
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
