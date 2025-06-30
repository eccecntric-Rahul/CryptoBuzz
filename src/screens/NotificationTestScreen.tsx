import React from 'react';
import { View, Button } from 'react-native';
import { sendLocalNotification } from '../utils/notificationService';
import TitleHeader from '../navigation/header/TitleHeader';

const NotificationTestScreen = () => {
  const sendTestNotification = () => {
    sendLocalNotification('Test Notification', 'This is a test local notification!');
  };

  return (
    <>
      <TitleHeader title="Notifications" />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Send Test Notification" onPress={sendTestNotification} />
    </View>
    </>
  );
};

export default NotificationTestScreen; 