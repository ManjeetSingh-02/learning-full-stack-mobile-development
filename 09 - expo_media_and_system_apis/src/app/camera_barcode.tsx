import { CameraView, useCameraPermissions, type BarcodeScanningResult } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function CameraBarCode() {
  const cameraRef = useRef<CameraView>(null);
  const lastBarCodeRef = useRef<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [qrCodeData, setQRCodeData] = useState<string | null>(null);

  function scanQRCode(scan: BarcodeScanningResult) {
    if (lastBarCodeRef.current === scan.data) return;
    lastBarCodeRef.current = scan.data;
    setQRCodeData(scan.data);
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CameraView
            ref={cameraRef}
            style={{
              height: 200,
              width: 200,
              borderRadius: 10,
              borderColor: 'blue',
              borderWidth: 2,
            }}
            barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
            onBarcodeScanned={scanQRCode}
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
              title="Clear"
              onPress={() => setQRCodeData(null)}
              disabled={!isReady || !qrCodeData}
            />
          </View>
          {qrCodeData && <Text>{qrCodeData}</Text>}
        </View>
      )}
    </View>
  );
}
