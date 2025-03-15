import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, TextInput, Button, Card, Text, Divider } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

const OrganizationProfile = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  return (
    <>
    <TopbarCustomerCreation />
    <ScrollView contentContainerStyle={styles.container}>
      {/* Upload Logo Section */}
      <Card style={styles.card}>
        <Card.Content>
          <Avatar.Icon size={80} icon="image-outline" style={styles.avatar} />
          <Text style={styles.uploadText}>Upload your logo</Text>
          <Text style={styles.subText}>
            This logo will appear on notifications
          </Text>
        </Card.Content>
      </Card>

      {/* Organization Details */}
      <Card style={styles.card}>
        <Card.Title title="Organization Details" />
        <Divider />
        <Card.Content>
          <TextInput
            label="Organization Name"
            mode="outlined"
            style={styles.input}
            placeholder="Enter organization name"
            value={organizationName}
            onChangeText={setOrganizationName}
          />
          <TextInput
            label="Industry"
            mode="outlined"
            style={styles.input}
            placeholder="Enter industry type"
            value={industry}
            onChangeText={setIndustry}
          />
          <TextInput
            label="Organization Location *"
            mode="outlined"
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
          />
        </Card.Content>
      </Card>

      {/* Address Section */}
      <Card style={styles.card}>
        <Card.Title title="Organization Address" />
        <Divider />
        <Card.Content>
          <TextInput
            label="Street"
            mode="outlined"
            style={styles.input}
            placeholder="Enter street address"
            value={street}
            onChangeText={setStreet}
          />
          <TextInput
            label="City"
            mode="outlined"
            style={styles.input}
            placeholder="Enter city"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            label="State"
            mode="outlined"
            style={styles.input}
            placeholder="Enter state"
            value={state}
            onChangeText={setState}
          />
        </Card.Content>
      </Card>

      {/* Save Button */}
      <Button
        mode="contained"
        style={styles.saveButton}
        onPress={() => console.log('Saved')}
      >
        Save
      </Button>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
  },
  avatar: {
    alignSelf: 'center',
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  uploadText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  saveButton: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
});

export default OrganizationProfile;
