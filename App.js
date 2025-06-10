import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { Colors } from './src/theme/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './src/screens/ChatScreen';



const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
      </Stack.Navigator>
      {/* <HomeScreen /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
