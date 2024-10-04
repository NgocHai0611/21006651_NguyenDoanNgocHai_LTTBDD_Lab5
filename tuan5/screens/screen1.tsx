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

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Image
          source={require("../assets/images/ImgWelcome.png")}
          style={{
            width: 350,
            height: 350,
            backgroundColor: "purple",
            borderRadius: 20,
          }}
        ></Image>
        <Text style={{ fontSize: 30 }}>Boost Productivity</Text>
        <Text style={{ color: "grey" }}>
          Simplity tasks , boost productivity
        </Text>

        <Pressable
          onPress={() => {
            navigation.navigate("register");
          }}
          style={{
            width: 350,
            height: 50,
            borderRadius: 10,
            backgroundColor: "aqua",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Sign up</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("login")}
          style={{
            width: 350,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#f3f4f6",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "black" }}>Login</Text>
        </Pressable>

        <View style={styles.containerIconDot}>
          <View style={styles.iconDotLeft}></View>
          <View style={styles.iconDotChoice}></View>
          <View style={styles.iconDotRight}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 600,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  containerContent: {
    flexDirection: "column",
    width: 350,
    height: 630,
    marginTop: 70,
    justifyContent: "space-between",
  },

  containerIconDot: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  iconDotLeft: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: "aqua",
    borderWidth: 2,
    marginRight: 15,
  },

  iconDotRight: {
    marginLeft: 15,
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: "aqua",
    borderWidth: 2,
  },

  iconDotChoice: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "aqua",
  },
});
