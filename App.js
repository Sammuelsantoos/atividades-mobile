import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ title: 'Conversas' }} 
          />
          <Stack.Screen 
            name="ChatScreen" 
            component={ChatScreen} 
            options={({ route }) => ({ 
              title: route.params.nome, // Puxa o nome que vem da Home
            })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
