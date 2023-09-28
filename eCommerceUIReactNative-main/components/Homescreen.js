import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import img1 from "../assets/summer.jpg";
import img2 from "../assets/long.png";
import img3 from "../assets/sweat.jpeg";

const items = [
  {
    id: 1,
    name: "Winter Sweater",
    price: 12.22,
    image: img3,
  },
  {
    id: 2,
    name: "Summer Shirt",
    price: 8.79,
    image: img1,
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 5.99,
    image: img2,
  },
];

const CommerceHomescreenApp = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState();
  return (
    <View style={styles.container}>
      {/* <View style={styles.btnSize}>
        <MaterialCommunityIcons
          name="cart-outline"
          size={24}
          color="black"
          style={{
            color: "blue",

            alignContent: "flex-start",
            justifyContent: "flex-start",
            marginTop: 80,
            marginLeft: 370,
            alignItems: "center",
          }}
        />
      </View> */}
      <Text style={styles.title}>Boutique</Text>
      <View style={styles.formContent}>
        <TextInput
          style={styles.inputs}
          placeholder="     Search..."
          underlineColorIos="transparent"
          onChangeText={(q) => setQuery(q)}
        />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Preview", {});
            }}>
            <View style={styles.card}>
              <View style={styles.item}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                  <View style={styles.starContainer}>
                    <Entypo
                      style={styles.star}
                      name="star"
                      size={24}
                      color="gold"
                    />
                    <Entypo
                      style={styles.star}
                      name="star"
                      size={24}
                      color="gold"
                    />
                    <Entypo
                      style={styles.star}
                      name="star"
                      size={24}
                      color="gold"
                    />
                    <Entypo
                      style={styles.star}
                      name="star"
                      size={24}
                      color="gold"
                    />
                    <Entypo
                      style={styles.star}
                      name="star"
                      size={24}
                      color="gold"
                    />
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 1,
    color: "black",
    marginHorizontal: 20,
    marginTop: 20,
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
  },
  itemImage: {
    width: 140,
    height: 190,

    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "blue",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    marginRight: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
    backgroundColor: "#e8e4e3",
    borderRadius: "40",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  star: {
    width: 30,
    height: 30,
  },

  starContainer: {
    justifyContent: "left",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
    marginRight: 30,
  },
});

export default CommerceHomescreenApp;
