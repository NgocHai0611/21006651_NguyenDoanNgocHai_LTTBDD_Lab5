import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

export default function Screen3({ navigation, route }) {
  const { datauser } = route.params;
  console.log(datauser);

  const [email, setEmail] = useState("");
  const [passs, setPass] = useState("");

  const handleLogin = () => {
    if (email == "" && passs == "") {
      alert("Nhập thông tin tài khoản");
    } else if (email != datauser.email || passs != datauser.pass) {
      alert("Login Fail");
    } else {
      alert("Login Success");
      navigation.navigate("dashboard");
    }
  };

  return (
    <View style={styles.containerLogin}>
      <View>
        <Image source={require("../assets/images/ImageLogin.png")}></Image>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome</Text>
      </View>

      <View style={styles.containerFormLogin}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Email</Text>
          <Image
            style={{ position: "absolute", marginTop: 35 }}
            source={require("../assets/images/mail.png")}
          ></Image>
          <TextInput
            style={[
              styles.inputSize,
              styles.paddingInput,
              { borderWidth: 1, borderColor: "black" },
            ]}
            placeholder="Enter email"
            onChangeText={setEmail}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Password</Text>

          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              width: "98%",
              height: 50,
              marginTop: 30,
              justifyContent: "space-between",
            }}
          >
            <Image source={require("../assets/images/lock.png")}></Image>
            <Image source={require("../assets/images/eye.png")}></Image>
          </View>
          <TextInput
            style={[
              styles.inputSize,
              styles.paddingInput,
              { borderWidth: 1, borderColor: "black" },
            ]}
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={setPass}
          ></TextInput>
        </View>
      </View>

      <Pressable style={styles.btnLogin} onPress={handleLogin}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
          Login
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: 550,
  },

  inputSize: {
    width: "100%",
    height: 50,
    backgroundColor: "#f3f4f6",
  },
  btnLogin: {
    width: "100%",
    height: 50,
    backgroundColor: "aqua",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  containerFormLogin: {
    width: "100%",
    height: 220,
  },
  paddingInput: {
    paddingLeft: 30,
  },
});
