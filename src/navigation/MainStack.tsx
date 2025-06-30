import React from 'react';
import { BottomTabs } from './TabNavigator';
import Header from '../components/Header';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsDetailScreen from '../screens/NewsDetailScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen
        name="NewsDetailScreen"
        component={NewsDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  drawer: {
    width: '100%',
  },
});
