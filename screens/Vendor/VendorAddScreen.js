import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { TextInput, Card, Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TopbarCustomerCreation from "../Customers/TopbarCustomerCreation";

export default function VendorAddScreen() {

    const navigation = useNavigation();
  return (
    <>
      <TopbarCustomerCreation />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>Customer Information</Text>
            <TextInput
              label="Vendor Name"
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Company Name"
              mode="outlined"
              style={styles.input}
            />
            <TextInput label="Email ID" mode="outlined" style={styles.input} />
            <TextInput label="Phone No" mode="outlined" style={styles.input} />
            <TextInput
              label="Customer Address *"
              mode="outlined"
              multiline
              numberOfLines={3}
              style={styles.input}
            />
            <TextInput
              label="Shipping Address *"
              mode="outlined"
              multiline
              numberOfLines={3}
              style={styles.input}
            />
          </Card>

          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>Other Information</Text>
            <TextInput
              label="Currency"
              mode="outlined"
              value="₹ INR"
              style={styles.input}
              right={<TextInput.Icon icon="chevron-down" />}
            />
             <TextInput
              label="Net 20"
              mode="outlined"
              value="Net 20"
              style={styles.input}
              right={<TextInput.Icon icon="chevron-down" />}
            />
          </Card>

          <View style = {styles.btnContainer}>
            <Button
                mode="text"
                textColor="red"
                style={styles.cancelButton}
                onPress={() => console.log("Product Added")}
            >
                Cancel
            </Button>
    
            <Button
                mode="contained"
                style={styles.submitButton}
                onPress={() => console.log("Product Added")}
            >
                Save
            </Button>
            </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  btnContainer : {
    justifyContent : 'center',
    alignSelf : 'center'
  },
  submitButton: {
    marginTop: 16,
    padding: 5,
    backgroundColor: "#FACC15",
    width : 150,
    borderRadius: 5 , 

  },
  cancelButton: {
    marginTop: 16,
    padding: 10,
  },
});
