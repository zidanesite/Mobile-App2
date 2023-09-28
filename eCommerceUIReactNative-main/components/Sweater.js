import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default Sweater = () => {
  const clickEventListener = () => {
    Alert.alert("Success", "Product has beed added to cart");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.starContainer}>
          {/* <View style={styles.btnSize}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{
                color: "blue",

                alignContent: "flex-start",
                justifyContent: "flex-start",
              }}
            />
          </View> */}
          {/* <View style={styles.btnSize}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={24}
              color="black"
              style={{
                color: "blue",

                alignContent: "flex-start",
                justifyContent: "flex-start",
              }}
            />
          </View> */}
          <View style={styles.btnSize}>
            <AntDesign
              name="hearto"
              size={24}
              color="black"
              style={{
                color: "blue",

                alignContent: "flex-start",
                justifyContent: "flex-start",
              }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", marginHorizontal: 30 }}>
          <Image
            style={styles.productImg}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca",
            }}
          />
          <Text style={styles.name}>Winter Sweater</Text>
          <View style={styles.starContainer}>
            <Entypo style={styles.star} name="star" size={24} color="gold" />
            <Entypo style={styles.star} name="star" size={24} color="gold" />
            <Entypo style={styles.star} name="star" size={24} color="gold" />
            <Entypo style={styles.star} name="star" size={24} color="gold" />
            <Entypo style={styles.star} name="star" size={24} color="gold" />
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec
          </Text>
          <View
            style={{ backgroundColor: "black", justifyContent: "flex-end" }}>
            <Text style={styles.bigDescription}>Material: 80% cotton</Text>
          </View>
        </View>

        <View style={styles.contentColors}>
          <TouchableOpacity
            style={[
              styles.btnColor,
              { backgroundColor: "#00BFFF" },
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              { backgroundColor: "#FF1493" },
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              { backgroundColor: "#00CED1" },
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              { backgroundColor: "#228B22" },
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              { backgroundColor: "#20B2AA" },
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              { backgroundColor: "#FF4500" },
            ]}></TouchableOpacity>
        </View>
        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}>
            <Text style={{ color: "blue" }}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text style={{ color: "blue" }}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text style={{ color: "blue" }}>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text style={{ color: "blue" }}>XL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.cartier}>
          <Text style={styles.price}>$ 12.22</Text>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: "black",
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginLeft: 155,
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "black",
    marginBottom: 10,
  },

  bigDescription: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 50,
    marginLeft: 50,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "black",
    flexDirection: "row-reverse",
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
  },
  cartier: {
    borderRadius: 50,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "black",
    height: 90,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentColors: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
    color: "blue",
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30,
  },
  shareButton: {
    height: 90,
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "blue",
  },
  shareButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  addToCarContainer: {
    marginHorizontal: 60,
  },
  btnTop: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
