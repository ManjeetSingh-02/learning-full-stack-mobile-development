import { useEffect, useState } from 'react';
import { Pedometer } from 'expo-sensors';

export default function usePedometer() {
  const [available, setAvailable] = useState<boolean>(false);
  const [data, setData] = useState<{ steps: number }>({ steps: 0 });

  useEffect(() => {
    let subscription: any;

    async function subscribe() {
      const isAvailable = await Pedometer.isAvailableAsync();
      setAvailable(isAvailable);

      if (!isAvailable) return;

      subscription = Pedometer.watchStepCount(result => setData(result));
    }

    subscribe();

    return () => subscription.remove();
  }, []);

  return { available, data };
}
