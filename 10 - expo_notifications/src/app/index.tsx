import { View, StyleSheet, Button } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function Index() {
  async function localNotification() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') return;

    await Notifications.scheduleNotificationAsync({
      content: {
        data: { screen: '/profile', userID: 123 },
        sound: 'default',
        body: 'This is local notification',
        priority: Notifications.AndroidNotificationPriority.HIGH,
        title: 'Local Notification',
        subtitle: 'This is subtitle',
        sticky: true,
      },
      trigger: null,
    });
  }

  async function localNotificationRepeat() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') return;

    await Notifications.scheduleNotificationAsync({
      content: {
        data: { screen: '/profile/repeat', userID: 123 },
        sound: 'default',
        body: 'This is local notification every 5 seconds',
        priority: Notifications.AndroidNotificationPriority.HIGH,
        title: 'Local Notification Repeat',
        subtitle: 'This is subtitle repeat',
        sticky: true,
      },
      trigger: {
        seconds: 5,
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        repeats: true,
      },
    });
  }

  async function cancelAllScheduledNotifications() {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  async function dismissAllNotifications() {
    await Notifications.dismissAllNotificationsAsync();
  }

  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener(response =>
      console.log(response.notification.request.content.data)
    );
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title='Press to send a local notification'
        onPress={localNotification}
      />
      <Button
        title='Press to send a local notification every 5s'
        onPress={localNotificationRepeat}
      />
      <Button
        title='Press to cancel all notifications'
        onPress={cancelAllScheduledNotifications}
      />
      <Button
        title='Press to dismiss all notifications'
        onPress={dismissAllNotifications}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
