import { useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors';

export default function useAccelerometer() {
  const [available, setAvailable] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  useEffect(() => {
    let subscription: any;

    async function subscribe() {
      const isAvailable = await Accelerometer.isAvailableAsync();
      setAvailable(isAvailable);

      if (!isAvailable) return;

      Accelerometer.setUpdateInterval(100);

      subscription = Accelerometer.addListener(data => {
        setX(data.x);
        setY(data.y);
        setZ(data.z);
      });
    }

    subscribe();

    return () => subscription.remove();
  }, []);

  return { available, x, y, z };
}
