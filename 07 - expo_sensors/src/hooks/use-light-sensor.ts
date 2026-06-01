import { useEffect, useState } from 'react';
import { LightSensor } from 'expo-sensors';
import { Platform } from 'react-native';

/**
 * Reads ambient light level in lux (lx).
 * LightSensor is Android-only in Expo.
 */
export default function useLightSensor() {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [lux, setLux] = useState(0);

  useEffect(() => {
    let subscription: any;

    async function subscribe() {
      if (Platform.OS !== 'android') return setAvailable(false);

      const isAvailable = await LightSensor.isAvailableAsync();
      setAvailable(isAvailable);

      if (!isAvailable) return;

      LightSensor.setUpdateInterval(16);

      subscription = LightSensor.addListener(data => setLux(data.illuminance));
    }

    subscribe();

    return () => subscription.remove();
  }, []);

  return { available, lux };
}
