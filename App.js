import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-500" >
          Hey!
        </Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
