import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Avatar, FAB } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

const users = [
  {
    id: '1',
    name: 'Jeya Surya',
    role: 'Admin',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'CCSS',
    role: 'Sales Person',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
];

const UserCard = ({ name, role, avatar }) => (
    
  <Card style={styles.card}>
    <Card.Content style={styles.cardContent}>
      <Avatar.Image size={48} source={{ uri: avatar }} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </Card.Content>
  </Card>
);

const UserScreen = ( { navigation } ) => {
  return (
    <>
    <TopbarCustomerCreation/>
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard name={item.name} role={item.role} avatar={item.avatar} />
        )}
        contentContainerStyle={styles.list}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('AddUser')}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 14,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#fbc02d',
  },
});

export default UserScreen;
