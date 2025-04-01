import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Menu, Divider, IconButton } from "react-native-paper";
import TopbarCustomerCreation from "../Customers/TopbarCustomerCreation";

export default function SalesProductOrderScreen( { navigation }) {
  const [productMenuVisible, setProductMenuVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Search Product");
  const [quantity, setQuantity] = useState("1");
  const [priceMenuVisible, setPriceMenuVisible] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("₹ 450");

  return (
    <>
    <TopbarCustomerCreation />
    <View style={styles.container}>
      <View style={styles.card}>
        <Menu
          visible={productMenuVisible}
          onDismiss={() => setProductMenuVisible(false)}
          anchor={
            <TextInput
              mode="outlined"
              label="Product Name *"
              value={selectedProduct}
              editable={false}
              right={<TextInput.Icon icon="menu-down" />}
              style={styles.input}
              onPressIn={() => setProductMenuVisible(true)}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setSelectedProduct("Product 1");
              setProductMenuVisible(false);
            }}
            title="Product 1"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              setSelectedProduct("Product 2");
              setProductMenuVisible(false);
            }}
            title="Product 2"
          />
        </Menu>

        <TextInput
          mode="outlined"
          label="Quantity"
          value={quantity}
          keyboardType="numeric"
          onChangeText={(text) => setQuantity(text)}
          style={styles.input}
        />

        <Menu
          visible={priceMenuVisible}
          onDismiss={() => setPriceMenuVisible(false)}
          anchor={
            <TextInput
              mode="outlined"
              label="Product Price"
              value={selectedPrice}
              editable={false}
              right={<TextInput.Icon icon="menu-down" />}
              style={styles.input}
              onPressIn={() => setPriceMenuVisible(true)}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setSelectedPrice("₹ 450");
              setPriceMenuVisible(false);
            }}
            title="₹ 450"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              setSelectedPrice("₹ 500");
              setPriceMenuVisible(false);
            }}
            title="₹ 500"
          />
        </Menu>

        <Button
          mode="contained"
          onPress={() => console.log("Add button clicked")}
          style={styles.addButton}
          labelStyle={styles.addButtonText}
          onPressIn={() => navigation.navigate('Sales')}
        >
          Add
        </Button>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    elevation: 3,
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#F5B840",
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
