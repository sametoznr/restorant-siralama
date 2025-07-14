import 'react-native-gesture-handler'; // Bu en üste gelmeli!
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SourceScreen from './Screens/SearchScreen';
import ResultScreen from './Screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Restorantlar' }}>
          <Stack.Screen name="Search" component={SourceScreen} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
