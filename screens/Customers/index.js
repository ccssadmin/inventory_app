import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Card, Text, Divider, Menu, Button } from "react-native-paper";
import TopbarCustomer from "./TopbarCustomer";
import { useNavigation } from "@react-navigation/native";

export default function Customers() {
  const [sortVisible, setSortVisible] = React.useState(false);
  const [sortOption, setSortOption] = React.useState("Name");

  const navigation = useNavigation();

  const handlenavigation = (screen) => {
        navigation.navigate(screen)
  }

  const customers = [
    {
      id: 1,
      name: "JJ Enterprises",
      contactPerson: "Jeya Surya",
      ongoingSale: {
        product: "Fridge",
        units: 20,
        status: "Ready To Ship",
      },
      screen : 'CustomerDetails'
    },
    {
      id: 2,
      name: "JS Stores",
      contactPerson: "Jai",
    },
    {
      id: 3,
      name: "CCS Solutions",
      contactPerson: "Crest",
    },
    {
      id: 4,
      name: "AK Solutions",
      contactPerson: "Ajith",
    },
  ];

  const toggleSortMenu = () => setSortVisible(!sortVisible);

  return (
    <>
      <TopbarCustomer />
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>All Customers</Text>
          <Menu
            visible={sortVisible}
            onDismiss={toggleSortMenu}
            anchor={
              <Button
                mode="text"
                onPress={toggleSortMenu}
                icon="filter-variant"
                labelStyle={styles.sortButtonLabel}
              >
                Sort by: {sortOption}
              </Button>
            }
          >
            <Menu.Item
              onPress={() => {
                setSortOption("Name");
                toggleSortMenu();
              }}
              title="Name"
            />
            <Menu.Item
              onPress={() => {
                setSortOption("Contact Person");
                toggleSortMenu();
              }}
              title="Contact Person"
            />
          </Menu>
        </View>

        {customers.map((customer, index) => (
          <React.Fragment key={customer.id}>
            <Card style={styles.card}>
              <TouchableOpacity style={styles.cardContent}
              onPress={() => handlenavigation(customer.screen)}
              >
                <Avatar.Text
                  label={customer.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                  size={40}
                  style={styles.avatar}
                />

                <View style={styles.details}>
                  <Text style={styles.customerName}>{customer.name}</Text>
                  <Text style={styles.contactPerson}>
                    {customer.contactPerson}
                  </Text>

                  {customer.ongoingSale && (
                    <View style={styles.saleInfo}>
                      <Text style={styles.productName}>
                        {customer.ongoingSale.product}
                      </Text>
                      <Text style={styles.productUnits}>
                        {customer.ongoingSale.units} units
                      </Text>
                      <Text style={styles.status}>
                        {customer.ongoingSale.status}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </Card>
            {index !== customers.length - 1 && (
              <Divider style={styles.divider} />
            )}
          </React.Fragment>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  sortButtonLabel: {
    fontSize: 14,
    color: "#4096fe",
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    backgroundColor: "#ff6b6b",
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  contactPerson: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
  },
  saleInfo: {
    marginTop: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4096fe",
  },
  productUnits: {
    fontSize: 12,
    color: "#777",
  },
  status: {
    fontSize: 12,
    color: "#28a745",
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 12,
  },
});
