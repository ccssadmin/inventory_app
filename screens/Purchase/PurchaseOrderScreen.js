import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Menu, Divider } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

export default function PurchaseOrderScreen  ( { navigation })  {
  const [vendorName, setVendorName] = useState('');
//   const [customerType, setCustomerType] = useState('');
  const [purchaseOrderNo, setPurchaseOrderNo] = useState('SO-0001');
  const [date, SetDate] = useState('25/02/2025');
  const [deliveryDate, setDeliveryDate] = useState('25/02/2025');
//   const [gstNo, setGstNo] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [terms, setTerms] = useState('');

//   const [customerTypeVisible, setCustomerTypeVisible] = useState(false);

//   const customerTypes = ['Individual', 'Business', 'Wholesaler', 'Retailer'];

  const handleSubmit = () => {
    console.log('Form Submitted:', {
      vendorName,
      purchaseOrderNo,
      date,
      deliveryDate,
      paymentTerms,
    });
  };

  return (
    <>
    <TopbarCustomerCreation />
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Vendor Name *"
        value={vendorName}
        onChangeText={setVendorName}
        style={styles.input}
        mode="outlined"
      />

      {/* Customer Type Dropdown */}
      {/* <Menu
        visible={customerTypeVisible}
        onDismiss={() => setCustomerTypeVisible(false)}
        anchor={
          <TextInput
            label="Customer Type"
            value={customerType}
            editable={false}
            style={styles.input}
            mode="outlined"
            right={
              <TextInput.Icon
                name="menu-down"
                onPress={() => setCustomerTypeVisible(true)}
              />
            }
          />
        }
      > */}
        {/* {customerTypes.map((type, index) => (
          <Menu.Item
            key={index}
            onPress={() => {
              setCustomerType(type);
              setCustomerTypeVisible(false);
            }}
            title={type}
          />
        ))} */}
      {/* </Menu> */}

      {/* Sales Order No */}
      <TextInput
        label="Purchase Order No. *"
        value={purchaseOrderNo}
        onChangeText={setPurchaseOrderNo}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Date *"
        value={date}
        onChangeText={SetDate}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Delivery Date"
        value={deliveryDate}
        onChangeText={setDeliveryDate}
        style={styles.input}
        mode="outlined"
      />

      
      <TextInput
        label="Payment Terms"
        value={paymentTerms}
        onChangeText={setPaymentTerms}
        style={styles.input}
        mode="outlined"
      />

      
      
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        onPressIn={() => navigation.navigate('PurchaseProductOrder')}

      >
       + Add Product
      </Button>

      <View style={styles.createOrderContainer}>

        <TextInput
        label='Customer Notes'
        value={customerNotes}
        onChangeText={setCustomerNotes}
        style={styles.input}
        mode='outlined'
        />

        <TextInput
        label='Terms and Condition'
        value={terms}
        onChangeText={setTerms}
        style={styles.input}
        mode='outlined'
        />

      </View>

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
                  onPress={ () => navigation.navigate('Purchase')}
                >
                  Create Purchase Order
                </Button>
                </View>
    </ScrollView>
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
    width : 180,
    backgroundColor : '#FACC15',
    alignSelf : 'center'
  },
  createOrderContainer : {
    flex : 0.4,
    marginTop : 15,
    marginBottom : 10
  },
  btnContainer : {
    justifyContent : 'center',
    alignSelf : 'center'
  },
  submitButton: {
    marginTop: 16,
    padding: 5,
    backgroundColor: "#FACC15",
    width : 250,
    borderRadius: 5 , 

  },
  cancelButton: {
    marginTop: 16,
    padding: 10,
  },
});