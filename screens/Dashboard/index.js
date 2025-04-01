import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import Topbar from "../../components/Topbar";

export default function Dashboard( { navigation }) {

    const handleMoveToCreateScreen = () => {
        navigation.navigate('CreateScreen')
    }


  return (
    <>
      <Topbar />
      <ScrollView style={styles.container}>
        <View style={styles.cardsContainer}>


          <Card style={[styles.card, styles.cardPacked]}>
            <View style={styles.cardRow}>
              <Icon name="package" size={40} color="#ff6b6b"  style = { { marginTop : -50 , marginLeft : -5}}/>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle1}>Product</Text>
                <Text style={styles.cardTitle2}> Packed</Text>
                <Text style={styles.cardNumber}>124</Text>
                <Text style={styles.cardSubText}>Quantity to be Packed</Text>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.cardShipped]}>
            <View style={styles.cardRow}>
              <Icon name="truck" size={40} color="#4096fe" style = { { marginTop : -50 , marginLeft : -5}} />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle1}>Product </Text>
                <Text style={styles.cardTitle2}>Shipped</Text>
                <Text style={styles.cardNumber}>215</Text>
                <Text style={styles.cardSubText}>Package to be Shipped</Text>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.cardDelivered]}>
            <View style={styles.cardRow}>
              <FeatherIcon name="check-circle" size={40} color="#28a745" style = { { marginTop : -50 , marginLeft : -5}}/>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle1}>Product</Text>
                <Text style={styles.cardTitle2}>Delivered</Text>
                <Text style={styles.cardNumber}>215</Text>
                <Text style={styles.cardSubText}>Package to be Shipped</Text>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.cardInvoiced]}>
            <View style={styles.cardRow}>
              <FontAwesomeIcon name="file-invoice" size={38} color="#ff9800" style = { { marginTop : -50 , marginLeft : -5}}/>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle1 }>Product</Text>
                <Text style={styles.cardTitle2}>Invoiced</Text>
                <Text style={styles.cardNumber}>215</Text>
                <Text style={styles.cardSubText}>Package to be Shipped</Text>
              </View>
            </View>
          </Card>
        </View>

        <Text style={styles.summaryHeading}>In-Hand Products Summary</Text>


        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryNumber}>120</Text>
              <Text style={styles.summaryText}>In-Hand Products</Text>
            </View>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryNumber}>45</Text>
              <Text style={styles.summaryText}>In-Hand Customers</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.createButton}
        onPress={handleMoveToCreateScreen}
        >
          <Text style={styles.createButtonText}>+ Create</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 16,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTextContainer: {
    marginLeft: 10,
  },
  cardPacked: {
    backgroundColor: "white",
    borderBottomColor : 'red',
    borderBottomWidth: 1
  },
  cardShipped: {
    backgroundColor: "white",
    borderBottomColor : 'blue',
    borderBottomWidth: 1
  },
  cardDelivered: {
    backgroundColor: "white",
    borderBottomColor : 'green',
    borderBottomWidth: 1
  },
  cardInvoiced: {
    backgroundColor: "white",
    borderBottomColor : 'orange',
    borderBottomWidth: 1
  },
  cardTitle1: {
    fontSize: 12,
    color: "#777",
    fontWeight: "bold",
  },
  cardTitle2: {
    fontSize: 20,
    color: "#777",
    fontWeight: "bold",
    marginLeft: -3
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 4,
    marginLeft : -35
  },
  cardSubText: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
    marginLeft : -35
  },
  summaryContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  summaryHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop : 12
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryBox: {
    alignItems: "center",
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  summaryText: {
    fontSize: 14,
    color: "#777",
  },
  createButton: {
    backgroundColor: "#ffc107",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    width : 180,
    marginTop : 12,
    alignSelf : 'center'
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
