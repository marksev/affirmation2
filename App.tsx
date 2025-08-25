import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { AffirmationViewerScreen } from './src/screens/AffirmationViewerScreen';
import { AffirmationCategory } from './src/types';

type RootStackParamList = {
  Home: undefined;
  AffirmationViewer: { category: AffirmationCategory };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AffirmationViewer" component={AffirmationViewerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
