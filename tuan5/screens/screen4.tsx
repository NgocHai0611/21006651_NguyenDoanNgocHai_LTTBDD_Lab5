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
import { useMemo, useState } from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Screen4() {
  //   const [itemProduct, setItemProduct] = useState([
  //     {
  //       id: "1",
  //       name: "donut",
  //       price: 2.99,
  //       qty: 0,
  //     },
  //   ]);

  const [qty, setQty] = useState(0);

  const handleIncreaseProduct = () => {
    setQty((quantity) => quantity + 1);
  };

  const totalPriceProduct = useMemo(() => qty * 2.99, [qty]);

  return (
    <View style={styles.containerScreen5}>
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: 130 }}
          source={require("../assets/images/ImgHeadLinePage4.png")}
        ></Image>
        <View style={styles.containerImgItem}>
          <Image source={require("../assets/images/ImgItem1.png")}></Image>
          <Image source={require("../assets/images/ImgItem2.png")}></Image>
          <Image source={require("../assets/images/ImgItem3.png")}></Image>
          <Image source={require("../assets/images/ImgItem4.png")}></Image>
        </View>

        {/* Product Price */}
        <View
          style={{
            flexDirection: "row",
            width: 180,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 34, fontWeight: "bold", color: "aqua" }}>
            $2,99
          </Text>
          <View
            style={{
              width: 75,
              height: 30,
              backgroundColor: "#f3f4f6",
              borderRadius: 15,
              marginTop: 10,
            }}
          >
            <Text style={{ textAlign: "center", color: "red" }}>
              Buy 1 get 1
            </Text>
          </View>
        </View>

        {/* Detail Product */}
        <View style={styles.containerDetailProduct}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Product name
            </Text>
            <Text>Occaecat est desc tempr offici</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image source={require("../assets/images/Rating.png")}></Image>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>4.5</Text>
          </View>
        </View>

        {/* Product Size */}
        <View>
          <Text>Size</Text>
          <View style={styles.containerSize}>
            <Pressable style={styles.btnSize}>
              <Text style={styles.textColorSize}>XS</Text>
            </Pressable>

            <Pressable style={styles.btnSize}>
              <Text style={styles.textColorSize}>S</Text>
            </Pressable>

            <Pressable style={styles.btnSizeChoice}>
              <Text style={{ color: "white" }}>M</Text>
            </Pressable>

            <Pressable style={styles.btnSize}>
              <Text style={styles.textColorSize}>L</Text>
            </Pressable>

            <Pressable style={styles.btnSize}>
              <Text style={styles.textColorSize}>XL</Text>
            </Pressable>
          </View>
        </View>

        {/* Total */}
        <View style={{ marginTop: 8, marginBottom: 10 }}>
          <Text>Quantiy</Text>
          <View style={styles.containerQuantity}>
            <View
              style={{
                flexDirection: "row",
                width: 60,
                height: 50,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>{qty}</Text>
              <Pressable onPress={handleIncreaseProduct}>
                <Image
                  source={require("../assets/images/iconPlush.png")}
                ></Image>
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 75,
                height: 50,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Total</Text>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                ${totalPriceProduct}
              </Text>
            </View>
          </View>
        </View>

        {/* Size Guide */}
        <View style={styles.containerSizeAndReview}>
          <Text style={{ fontWeight: "bold" }}>Size guide</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>

        {/* Reviews */}
        <View style={styles.containerSizeAndReview}>
          <Text style={{ fontWeight: "bold" }}>Reviews(99)</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>

        {/* Add TO Cart */}
        <Pressable style={styles.btnAddToCart}>
          <AntDesign name="shoppingcart" size={24} color="white" />
          <Text style={{ color: "white", marginLeft: 10 }}>Add To Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerScreen5: {
    width: "100%",
    height: 700,

    flexDirection: "column",
    alignItems: "center",
  },

  container: {
    width: 350,
    height: 600,
  },

  imgItemHeader: {},
  containerImgItem: {
    marginTop: 10,
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerDetailProduct: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
  },

  btnSize: {
    width: 40,
    height: 40,
    backgroundColor: "#f3f4f6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "aqua",
  },

  btnSizeChoice: {
    width: 40,
    height: 40,
    backgroundColor: "aqua",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "aqua",
  },

  textColorSize: {
    color: "aqua",
  },

  containerSize: {
    flexDirection: "row",
  },

  containerQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
  },

  btnAddToCart: {
    width: "100%",
    height: 50,
    backgroundColor: "aqua",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  containerSizeAndReview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderColor: "black",
    width: "100%",
    height: 50,
  },
});
