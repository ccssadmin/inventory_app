import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text, Avatar, IconButton, Button, Searchbar } from "react-native-paper";
import TopbarCustomer from "../Customers/TopbarCustomer";

export default function BillsListScreen( {navigation}) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);
    
  const salesOrders = [
    {
      id: 1,
      company: "JJ Enterprises",
      contact: "Jeya Surya",
      totalPrice: "₹ 16,00,000",
      paymentTerm: "12 No",
      orderNo: "#IV-0001",
      date: "5 Mar - 2:02 pm",
      avatarColor: "red",
    },
    {
      id: 2,
      company: "JS Enterprises",
      contact: "Jas",
      totalPrice: "₹ 12,00,000",
      paymentTerm: "12 No",
      orderNo: "#IV-0002",
      date: "24 Feb - 2:02 pm",
      avatarColor: "yellow",
    },
    {
      id: 3,
      company: "AK Enterprises",
      contact: "AJITH ",
      totalPrice: "₹ 12,00,000",
      paymentTerm: "12 No",
      orderNo: "#SO-0003",
      date: "24 Feb - 2:02 pm",
      avatarColor: "yellow",
    },
  ];

  return (
    <>
    <TopbarCustomer />
    <ScrollView contentContainerStyle={styles.container}>
    <Searchbar
        placeholder="Search Customer"
        value={searchQuery}
        onChangeText={onChangeSearch}
        style={styles.searchBar}
        inputStyle={styles.inputStyle}
        iconColor="#909090"
      />
      <View style={styles.header}>
        <Text style={styles.title}>Recent Bills</Text>
        <IconButton icon="calendar" size={24} onPress={() => {}} />
      </View>
      {salesOrders.map((order) => (
        <Card key={order.id} style={styles.card} onPress={() => navigation.navigate('BillsDetailedScreen')}>
          <View style={styles.cardContent}>
            <Avatar.Text
              label={order.company.charAt(0)}
              size={40}
              color="white"
              style={[styles.avatar, { backgroundColor: order.avatarColor }]}
            />
            <View style={styles.info}>
              <Text style={styles.company}>{order.company}</Text>
              <Text style={styles.contact}>{order.contact}</Text>
            </View>
            <View >
                <Text style={styles.orderNo}>{order.orderNo}</Text>
                <Text style={styles.date}>{order.date}</Text>
            </View>
            
          </View>
          <View style={styles.cardFooter}>
            <View style={styles.footerSection}>
              <Text style={styles.footerLabel}>Total Prize</Text>
              <Text style={styles.footerValue}>{order.totalPrice}</Text>
            </View>
            <View style={styles.footerSection}>
              <Text style={styles.footerLabel}>Product</Text>
              <Text
                style={[
                  styles.footerValue,
                  order.paymentTerm === "Paid" ? styles.paid : styles.credit,
                ]}
              >
                {order.paymentTerm}
              </Text>
            </View>
          </View>
        </Card>
      ))}
        
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  company: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contact: {
    color: "#777",
  },
  orderNo: {
    color: "#777",
  },
  date : {
    color: "#777",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 16,
  },
  footerSection: {
    alignItems: "flex-start",
  },
  footerLabel: {
    color: "#777",
  },
  footerValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paid: {
    color: "green",
  },
  credit: {
    color: "blue",
  },
  searchBar: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    elevation: 2, // For shadow
  },
  inputStyle: {
    fontSize: 14,
    color: '#333',
  },
  
});
