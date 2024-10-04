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
import CheckBox from "react-native-check-box";
import { useState } from "react";
import { Link } from "expo-router";

export default function Screen2() {
  const [stateCheckBox, setStateCheckBox] = useState(false);

  return (
    <View style={styles.containerScreen2}>
      <View style={styles.containerFormRegister}>
        <Image
          source={require("../assets/images/logoScreenRegister.png")}
        ></Image>

        <Text style={{ fontSize: 32 }}>Nice to see you!</Text>
        <Text style={{ fontSize: 13 }}>Create Your Account</Text>

        <View style={styles.containerInputRegister}>
          <View>
            <Image
              style={[
                styles.imgSizeIcon,
                { position: "absolute", marginTop: 15 },
              ]}
              source={require("../assets/images/user.png")}
            ></Image>
            <TextInput
              style={[styles.sizeInputSubmit, styles.paddingInput]}
              placeholder="Enter your user name"
            ></TextInput>
          </View>

          <View>
            <Image
              style={[
                styles.imgSizeIcon,
                { position: "absolute", marginTop: 13 },
              ]}
              source={require("../assets/images/mail.png")}
            ></Image>
            <TextInput
              style={[styles.sizeInputSubmit, styles.paddingInput]}
              placeholder="Enter your email address"
            ></TextInput>
          </View>

          <View>
            <View
              style={{
                position: "absolute",
                flexDirection: "row",
                width: "98%",
                height: 50,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={styles.imgSizeIcon}
                source={require("../assets/images/lock.png")}
              ></Image>
              <Image
                style={styles.imgSizeIcon}
                source={require("../assets/images/eye.png")}
              ></Image>
            </View>

            <TextInput
              style={[styles.sizeInputSubmit, styles.paddingInput]}
              secureTextEntry={true}
              placeholder="Enter your password"
            ></TextInput>
          </View>
        </View>

        {/* Aggree Condition */}
        <View style={styles.containerAgreeCondition}>
          <CheckBox
            onClick={() => {
              setStateCheckBox(!stateCheckBox);
            }}
            isChecked={stateCheckBox}
          ></CheckBox>

          <Text style={{ marginLeft: 5 }}>I agree with</Text>
          <Link href={"#"} style={{ color: "blue", marginLeft: 4 }}>
            Term & Conditions
          </Link>
        </View>

        <Pressable style={styles.btnContinue}>
          <Text>Countinue</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerScreen2: {
    width: "100%",
    height: 715,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  containerFormRegister: {
    flexDirection: "column",
    width: 300,
    height: 550,

    alignItems: "center",
    justifyContent: "space-between",
  },

  containerInputRegister: {
    width: "100%",
    height: 200,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  sizeInputSubmit: {
    height: 50,
    borderWidth: 1,
    backgroundColor: "white",
  },

  btnContinue: {
    width: "100%",
    height: 50,
    backgroundColor: "aqua",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  containerAgreeCondition: {
    width: "100%",
    flexDirection: "row",
  },

  imgSizeIcon: {
    width: 28,
    height: 25,
  },

  paddingInput: {
    paddingLeft: 35,
  },
});
