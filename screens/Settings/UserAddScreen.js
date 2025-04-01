import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Avatar, Menu, TextInput } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

const UserAddScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSave = () => {
    console.log('User saved:', { fullName, email, role });
  };

  return (
    <>
    <TopbarCustomerCreation />
    
    <View style={styles.container}>
      {/* Input Fields */}
      <TextInput
        label="Full Name"
        mode="outlined"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        label="Email ID"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <TextInput
            label="Role"
            mode="outlined"
            value={role}
            style={styles.input}
            onFocus={() => setMenuVisible(true)}
          />
        }
      >
        <Menu.Item onPress={() => setRole('Admin')} title="Admin" />
        <Menu.Item onPress={() => setRole('Sales Person')} title="Sales Person" />
        <Menu.Item onPress={() => setRole('Manager')} title="Manager" />
      </Menu>

      <View style={styles.uploadSection}>
        <Avatar.Icon size={80} icon="image" style={styles.avatar} />
        <Text style={styles.uploadText}>Upload your Image</Text>
      </View>

      <Button
        mode="contained"
        style={styles.saveButton}
        onPress={handleSave}
      >
        Save
      </Button>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  input: {
    marginBottom: 15,
  },
  uploadSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    backgroundColor: '#e0e0e0',
  },
  uploadText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#fbc02d',
    paddingVertical: 5,
  },
});

export default UserAddScreen;
