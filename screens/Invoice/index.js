import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Menu, Divider } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

export default function InvoiceScreen  ( { navigation })  {
  const [customerName, setCustomerName] = useState('');
  const [invoiceNo, setInvoiceNo] = useState('IV-0001');
  const [orderNo, setOrderNo] = useState('232323')
  const [invoiceDate, setInvoiceDate] = useState('25/02/2025');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [salesperson, setSalesperson] = useState('');
  const [subject, setSubject] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [terms, setTerms] = useState('');

  const [customerTypeVisible, setCustomerTypeVisible] = useState(false);

  const customerTypes = ['Individual', 'Business', 'Wholesaler', 'Retailer'];

  const handleSubmit = () => {
    console.log('Form Submitted:', {
      customerName,
      invoiceNo,
      orderNo,
      invoiceDate,
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
        label="Customer Name *"
        value={customerName}
        onChangeText={setCustomerName}
        style={styles.input}
        mode="outlined"
      />


      <TextInput
        label="Invoice No. *"
        value={invoiceNo}
        onChangeText={setInvoiceNo}
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
        label="Invoice Date *"
        value={invoiceDate}
        onChangeText={setInvoiceDate}
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
                  onPressIn={() => navigation.navigate('InvoiceList')}
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