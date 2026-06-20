import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

async function registerForPushNotificationsAsync(): Promise<string | null> {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  if (!Device.isDevice) {
    console.warn('Push notifications require a physical device.');
    return null;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    console.warn('Permission for push notifications was denied.');
    return null;
  }

  const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
  if (!projectId) {
    console.warn('Project ID not found in app config.');
    return null;
  }

  const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
  return token;
}

export default function Push() {
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(async t => {
        if (!t) {
          setStatus('Could not get a push token (see logs).');
          return;
        }
        setToken(t);
      })
      .catch(e => setStatus(String(e)));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expo push token</Text>
      <Text
        selectable
        style={styles.token}
      >
        {token ?? 'registering...'}
      </Text>
      {status ? <Text style={styles.status}>{status}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  label: {
    fontWeight: '600',
  },
  token: {
    textAlign: 'center',
    fontSize: 12,
  },
  status: {
    color: '#208AEF',
  },
});
