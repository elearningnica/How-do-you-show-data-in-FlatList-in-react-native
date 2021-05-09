import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { PRODUCTS } from "./data/productData";

const renderProductItem = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
          {props.item.Name}
        </Text>
        <Text style={styles.productNumber}>{props.item.ProductNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>product list</Text>
      </View>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  productName: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
    width: 170,
  },
  productNumber: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  header: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#00BFFF",
  },
  headerTitle: {
    fontSize: 25,
    color: "#FFFFFF",
    marginTop: 10,
  },
});
