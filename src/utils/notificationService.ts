import PushNotification from 'react-native-push-notification';
import { PermissionsAndroid, Platform } from 'react-native';

export const configureNotifications = () => {
  // Request notification permission on Android 13+
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  }

  // Configure push notifications
  PushNotification.configure({
    onRegister: function (token: any) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification: any) {
      console.log('NOTIFICATION:', notification);
      // process the notification
      // required on iOS only
      notification.finish && notification.finish(PushNotification.FetchResult.NoData);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  // Create a default channel for Android
  PushNotification.createChannel(
    {
      channelId: 'default-channel-id', // (required)
      channelName: 'Default Channel', // (required)
      channelDescription: 'A default channel for CryptoBuzz notifications',
      soundName: 'default',
      importance: 4, // Importance.HIGH
      vibrate: true,
    },
    (created: boolean) => console.log(`createChannel returned '${created}'`) // (optional) callback
  );
};

export const sendLocalNotification = (title: string, message: string) => {
  PushNotification.localNotification({
    channelId: 'default-channel-id',
    title,
    message,
  });
}; 