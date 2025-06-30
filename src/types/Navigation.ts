import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  CreatePinScreen: undefined;
  VerifyPinScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Filters:undefined;
  Profile:undefined;
};

export type MainStackParamList = {
  BottomTabs: undefined;
  SettingsScreen:undefined;
  EditProfileScreen:undefined;
  // Add other main stack screens here
};

export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

// Prop types for screens
export type AuthScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  T
>;

export type MainScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  T
>;

