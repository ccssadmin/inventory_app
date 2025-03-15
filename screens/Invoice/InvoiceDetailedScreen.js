import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card, Text, Divider, Avatar, Button } from "react-native-paper";
import TopbarCustomerCreation from "../Customers/TopbarCustomerCreation";

export default function InvoiceDetailedScreen ()  {
  return (
    <>
    <TopbarCustomerCreation />
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.label}>Customer Name</Text>
          <Text style={styles.value}>Jeya Surya</Text>

          <Text style={styles.label}>Company Name</Text>
          <Text style={styles.value}>JJ Enterprises</Text>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Invoice No.</Text>
              <Text style={styles.value}>#SO - 0001</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Sales Date</Text>
              <Text style={styles.value}>25/02/2025</Text>
            </View>
          </View>

          <Text style={styles.label}>Payment Terms</Text>
          <Text style={styles.value}>Credit - 30 Days</Text>

          <Text style={styles.label}>Sales Person</Text>
          <View style={styles.row}>
            <Avatar.Image size={36} source={{ uri: "https://via.placeholder.com/36" }} />
            <Text style={[styles.value, styles.avatarText]}>Madhan</Text>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Total Amount</Text>
              <Text style={styles.totalValue}>29,450</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Total Products</Text>
              <Text style={styles.totalValue}>12</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.row}>
            <Avatar.Image size={48} source={{ uri: "https://via.placeholder.com/48" }} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Lizel Rose (60 ml)</Text>
              <Text style={styles.productDetails}>Quantity - 20 Nos. - ₹120</Text>
            </View>
            <Text style={styles.productPrice}>₹ 5,500</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.row}>
            <Avatar.Image size={48} source={{ uri: "https://via.placeholder.com/48" }} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Lizel Rose (60 ml)</Text>
              <Text style={styles.productDetails}>Quantity - 20 Nos. - ₹120</Text>
            </View>
            <Text style={styles.productPrice}>₹ 5,500</Text>
          </View>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={styles.submitButton}
        // onPressIn={() => navigation.navigate('InvoiceList')}
      >
        Download
      </Button>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa",
    marginTop : 20
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    color: "#6c757d",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
    marginBottom: 8,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#212529",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "",
    marginBottom: 8,
  },
  column: {
    flex: 1,
  },
  avatarText: {
    marginLeft: 8,
  },
  divider: {
    marginVertical: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
  },
  productDetails: {
    fontSize: 12,
    color: "#6c757d",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#212529",
  },
  submitButton: {
    marginTop: 16,
    padding: 5,
    backgroundColor: "#FACC15",
    width : 200,
    borderRadius: 5 , 
    alignSelf : 'center',
    marginBottom : 15

  },
});

