import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Menu, Divider } from "react-native-paper";
import TopbarCustomerCreation from "../Customers/TopbarCustomerCreation";

const TaxesScreen = () => {
  const [newTaxVisible, setNewTaxVisible] = useState(false);
  const [gstTaxVisible, setGstTaxVisible] = useState(false);

  return (
    <>
    <TopbarCustomerCreation />
    <View style={styles.container}>
      <Menu
        visible={newTaxVisible}
        onDismiss={() => setNewTaxVisible(false)} 
        anchor={
          <Button
            mode="outlined"
            style={styles.dropdown}
            onPress={() => setNewTaxVisible(true)} 
            contentStyle={styles.dropdownContent}
            labelStyle={styles.dropdownLabel}
          >
            New Tax
          </Button>
        }
      >
      </Menu>

      <Divider style={styles.divider} />

      <Menu
        visible={gstTaxVisible}
        onDismiss={() => setGstTaxVisible(false)} 
        anchor={
          <Button
            mode="outlined"
            style={styles.dropdown}
            onPress={() => setGstTaxVisible(true)} 
            contentStyle={styles.dropdownContent}
            labelStyle={styles.dropdownLabel}
          >
            GST Tax
          </Button>
        }
      >
      </Menu>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  dropdown: {
    marginVertical: 10,
    borderColor: "#6200ee",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  dropdownContent: {
    height: 50,
    justifyContent: "center",
  },
  dropdownLabel: {
    fontSize: 16,
    textTransform: "none",
  },
  divider: {
    marginVertical: 20,
    backgroundColor: "#ccc",
  },
});

export default TaxesScreen;