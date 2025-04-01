import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import TopbarCreateScreenDash from "./TopbarCreateScreenDash";
import { useNavigation } from "@react-navigation/native";

export default function CreateScreen() {
  const navigation = useNavigation();

  const menuItems = [
    { id: 1, title: "Customers", icon: "account-group", color: "#ff6b6b", screen: "CustomerCreation" },
    { id: 2, title: "Products", icon: "leaf", color: "#28a745", screen: "AddProduct" },
    { id: 3, title: "Sales Order", icon: "truck", color: "#4096fe", screen: "SalesOrder" },
    { id: 4, title: "Purchase Order", icon: "cart", color: "#ffc107", screen: "PurchaseOrder" },
    { id: 5, title: "Vendors", icon: "store", color: "#20c997", screen: "VendorAdd" },
    { id: 6, title: "Invoice", icon: "file-invoice-dollar", color: "#ff9800", fontType: "FontAwesome", screen: "Invoice" },
    { id: 7, title: "Bills", icon: "file-invoice", color: "#d63384", fontType: "FontAwesome", screen: "Bills" },
  ];

  const handleNavigation = (screen) => {
    switch (screen) {
      case 'CustomerCreation':
        navigation.navigate('Customers', { screen: 'CustomerCreation' });
        break;
      case 'AddProduct':
        navigation.navigate('Products', { screen: 'AddProduct' });
        break;
      case 'SalesOrder':
        navigation.navigate('Sales', { screen: 'SalesOrder' });
        break;
      case 'PurchaseOrder':
        navigation.navigate('Purchase' , { screen : 'PurchaseOrder'});
        break;
      case 'VendorAdd':
        navigation.navigate('Purchase' , { screen : 'VendorAdd'});
        break ;
      case 'Invoice' :
        navigation.navigate('Sales' , { screen : 'Invoice'});
        break ;
        case 'Bills' :
          navigation.navigate('Sales' , { screen : 'Bills'});
          break ;
      default:
        console.warn('Unhandled navigation:', screen);
    }
  };

  return (
    <>
      <TopbarCreateScreenDash />
      <ScrollView style={styles.container}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => handleNavigation(item.screen)}
          >
            <View style={styles.cardContent}>
              {item.fontType === "FontAwesome" ? (
                <FontAwesomeIcon name={item.icon} size={30} color={item.color} />
              ) : (
                <Icon name={item.icon} size={30} color={item.color} />
              )}
              <Text style={styles.cardText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 16,
    color: "#333",
  },
});
