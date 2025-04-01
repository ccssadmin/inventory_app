import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text, Button, Divider } from "react-native-paper";
import TopbarCustomerDetail from "./TopbarCustomerDetail";

export default function CustomerDetailScreen() {
  return (
    <>
    <TopbarCustomerDetail />
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.headerRow}>
          <Avatar.Text
            label="RK"
            size={48}
            style={styles.avatar}
          />
          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>JJ Enterprises</Text>
            <Text style={styles.contactPerson}>Jeya Surya</Text>
            <Button
              mode="contained"
              compact
              style={styles.badge}
              labelStyle={styles.badgeLabel}
            >
              Wholesale
            </Button>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>📧 js@gmail.com</Text>
          <Text style={styles.contactItem}>📞 +91 9876543210</Text>
          <Text style={styles.contactItem}>📞 +91 1234567890</Text>
        </View>
      </Card>23

      <Card style={styles.salesCard}>
        <View style={styles.salesHeader}>
          <Text style={styles.salesTitle}>Sales History</Text>
          <Button mode="text" labelStyle={styles.sortButton}>
            Sort by
          </Button>
        </View>
        <View style={styles.salesDetails}>
          <View style={styles.salesItem}>
            <Text style={styles.salesLabel}>Total Receivables</Text>
            <Text style={styles.salesValue}>40,586</Text>
          </View>
          <Divider style={styles.verticalDivider} />
          <View style={styles.salesItem}>
            <Text style={styles.salesLabel}>Balance Credits</Text>
            <Text style={styles.salesValue}>40,586</Text>
          </View>
        </View>
      </Card>
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
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#ff6b6b",
    marginRight: 16,
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  contactPerson: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#6200ea",
    borderRadius: 16,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  badgeLabel: {
    fontSize: 12,
    color: "#fff",
  },
  divider: {
    marginVertical: 12,
  },
  contactInfo: {
    marginTop: 8,
  },
  contactItem: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  salesCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  salesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  salesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  sortButton: {
    fontSize: 14,
    color: "#4096fe",
  },
  salesDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  salesItem: {
    flex: 1,
    alignItems: "center",
  },
  salesLabel: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },
  salesValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  verticalDivider: {
    height: "100%",
    width: 1,
    backgroundColor: "#ddd",
  },
});
