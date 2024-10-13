import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Task Manager",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" />
    </>
  );
}
