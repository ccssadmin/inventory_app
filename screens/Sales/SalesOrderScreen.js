import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Menu, Divider } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

export default function SalesOrderScreen  ( { navigation })  {
  const [customerName, setCustomerName] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [salesOrderNo, setSalesOrderNo] = useState('SO-0001');
  const [salesOrderDate, setSalesOrderDate] = useState('25/02/2025');
  const [shipmentDate, setShipmentDate] = useState('25/02/2025');
  const [gstNo, setGstNo] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [salesperson, setSalesperson] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [terms, setTerms] = useState('');

  const [customerTypeVisible, setCustomerTypeVisible] = useState(false);

  const customerTypes = ['Individual', 'Business', 'Wholesaler', 'Retailer'];


  const handleSubmit = () => {
    console.log('Form Submitted:', {
      customerName,
      customerType,
      salesOrderNo,
      salesOrderDate,
      shipmentDate,
      gstNo,
      paymentTerms,
      salesperson,
    });
  };

  return (
    <>
    <TopbarCustomerCreation />
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Customer Name *"
        value={customerName}
        onChangeText={setCustomerName}
        style={styles.input}
        mode="outlined"
      />

      <Menu
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
      >
        {customerTypes.map((type, index) => (
          <Menu.Item
            key={index}
            onPress={() => {
              setCustomerType(type);
              setCustomerTypeVisible(false);
            }}
            title={type}
          />
        ))}
      </Menu>

      <TextInput
        label="Sales Order No. *"
        value={salesOrderNo}
        onChangeText={setSalesOrderNo}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Sales Order Date *"
        value={salesOrderDate}
        onChangeText={setSalesOrderDate}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Shipment Date"
        value={shipmentDate}
        onChangeText={setShipmentDate}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="GST No."
        value={gstNo}
        onChangeText={setGstNo}
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

      <TextInput
        label="Salesperson"
        value={salesperson}
        onChangeText={setSalesperson}
        style={styles.input}
        mode="outlined"
      />

      
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        onPressIn={() => navigation.navigate('SalesProductOrder')}
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
                  onPress={ () => navigation.navigate('Sales')}
                >
                  Create Sales Order
                </Button>
                </View>
    </ScrollView>
    </>
  );
};


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
    width : 200,
    borderRadius: 5 , 

  },
  cancelButton: {
    marginTop: 16,
    padding: 10,
  },
});