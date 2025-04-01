import React from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import TopbarProduct from './TopbarProduct';
import { TextInput } from 'react-native-paper';

const Products = () => {
  const products = [
    { id: '1', name: 'Lizol', size: '120 ml', price: '₹ 120', image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
    { id: '2', name: 'Lizol', size: '120 ml', price: '₹ 120', image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
    { id: '3', name: 'Lizol', size: '120 ml', price: '₹ 120', image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
    { id: '4', name: 'Lizol', size: '120 ml', price: '₹ 120', image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
    { id: '5', name: 'Lizol', size: '120 ml', price: '₹ 120', image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <TopbarProduct />

      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.scrollView}
      >
        <TextInput 
          mode='outlined'
          label="🔍 Search Products"
          style={styles.input}
        />
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <View style={styles.cardContent}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{product.name} ({product.size})</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            </View>
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
  },
  scrollView: {
    flex: 1,
    marginTop: 0,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
    paddingLeft: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3, // Shadow effect for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginTop: 10,
  },
});

export default Products;