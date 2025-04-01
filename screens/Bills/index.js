import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Menu, Divider } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

export default function BillScreen  ( { navigation })  {
  const [vendorName, setVendorName] = useState('');
  const [billNo, setBillNo] = useState('B-0001');
  const [orderNo, setOrderNo] = useState('232323')
  const [billDate, setBillDate] = useState('25/02/2025');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [salesperson, setSalesperson] = useState('');
  const [subject, setSubject] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [terms, setTerms] = useState('');

  const [customerTypeVisible, setCustomerTypeVisible] = useState(false);

  const customerTypes = ['Individual', 'Business', 'Wholesaler', 'Retailer'];

  const handleSubmit = () => {
    console.log('Form Submitted:', {
      vendorName,
      billNo,
      orderNo,
      billDate,
      paymentTerms,
      salesperson,
      subject
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


      <TextInput
        label="Bill No. *"
        value={billNo}
        onChangeText={setBillNo}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Order No. *"
        value={orderNo}
        onChangeText={setOrderNo}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Bill Date *"
        value={billDate}
        onChangeText={setBillDate}
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

      <TextInput
        label="subject"
        value={subject}
        onChangeText={setSubject}
        style={styles.input}
        mode="outlined"
      />

      
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        textColor='#3F0D93'
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
                  onPressIn={() => navigation.navigate('BillsList')}
                  textColor='#3F0D93'

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
    alignSelf : 'center',
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