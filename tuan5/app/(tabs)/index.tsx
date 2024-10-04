import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Screen1 from "@/screens/screen1";
import Screen2 from "@/screens/screen2";
import Screen3 from "@/screens/screen3";
import { Screen4 } from "@/screens/screen4";
import { useNavigation } from "@react-navigation/native"; // Import useNavigatio
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="intro">
      <Stack.Screen
        name="intro"
        component={Screen1}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="register"
        component={Screen2}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#f3f4f6", borderBottomWidth: 0 },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="login"
        component={Screen3}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="dashboard"
        component={Screen4}
        options={{
          headerTitle: "Product name",
          headerStyle: { borderBottomWidth: 0, elevation: 0 },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
