import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

const CurrencyScreen = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');

  const currencies = [
    { code: 'AED', name: 'UAE Dirham' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'BND', name: 'Brunei Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'CNY', name: 'Yuan Renminbi' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'SAR', name: 'Saudi Riyal' },
    { code: 'USD', name: 'United States Dollar' },
  ];

  const handleSelection = (code) => {
    setSelectedCurrency(code);
  };

  return (
    <>
    <TopbarCustomerCreation />
    <View style={styles.container}>
      {currencies.map((currency) => (
        <View style={styles.row} key={currency.code}>
          <Checkbox
            status={selectedCurrency === currency.code ? 'checked' : 'unchecked'}
            onPress={() => handleSelection(currency.code)}
            color="#ffc107"
          />
          <Text style={styles.text}>
            {currency.code} - {currency.name}
          </Text>
        </View>
      ))}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default CurrencyScreen;
