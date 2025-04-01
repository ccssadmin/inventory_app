// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { List, Divider, Text } from 'react-native-paper';
// import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

// const Settings = ( { navigation }) => {

 
//   return (
//   <>
//   <TopbarCustomerCreation />
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <List.Item
//           title="Organization Profile"
//           left={(props) => <List.Icon {...props} icon="office-building" />}
//           style={{marginBottom:15 , marginTop: 10}}
//           onPress={() => navigation.navigate('OrganizationProfile')}
//         />
//         <Divider />
//         <List.Item
//           title="Users"
//           left={(props) => <List.Icon {...props} icon="account-group" />}
//           style={{marginBottom:15 , marginTop: 10}}
//           onPress={() => navigation.navigate('UserScreen')}
//         />
//         <Divider />
//         <List.Item
//           title="Currency"
//           left={(props) => <List.Icon {...props} icon="currency-usd" />}
//           style={{marginBottom:15 , marginTop: 10}}
//           onPress={() => navigation.navigate('Currency')}
//         />
//         <Divider />
//         <List.Item
//           title="Taxes"
//           left={(props) => <List.Icon {...props} icon="cash-register" />}
//           style={{marginBottom:15 , marginTop: 10}}
//           onPress={() => navigation.navigate('Tax')}
//         />
//         <Divider />
//         <List.Item
//           title="Feedback"
//           left={(props) => <List.Icon {...props} icon="message-text" />}
//           style={{marginBottom:15 , marginTop: 10}}
//         />
//         <Divider />
//         <List.Item
//           title="Rate us"
//           left={(props) => <List.Icon {...props} icon="star" />}
//           style={{marginBottom:15 , marginTop: 10}}
//         />
//         <Divider />
//         <List.Item
//           title="Logout"
//           titleStyle={{ color: 'red' }}
//           left={(props) => <List.Icon {...props} icon="logout" color="red" />}
//           style={{marginBottom:15 ,marginTop: 10}}
//           // onPress={() => navigation.navigate('Logout')}
//           onPress={ () => handleModalWindowForLogout}
//         />
//       </View>
//     </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     marginTop: 20
//   },
//   card: {
//     width: '90%',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     elevation: 3,
//     paddingVertical: 8,
//   },
// });

// export default Settings;


import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Divider, Text, Button, Modal, Portal } from 'react-native-paper';
import TopbarCustomerCreation from '../Customers/TopbarCustomerCreation';

const Settings = ({ navigation }) => {
  // State to manage the visibility of the logout modal
  const [logoutVisible, setLogoutVisible] = useState(false);

  // Function to handle logout confirmation
  const handleLogout = () => {
    console.log('User logged out'); 
    setLogoutVisible(false); 
    navigation.navigate('Login');
  };

  return (
    <>
      <TopbarCustomerCreation />
      <View style={styles.container}>
        <View style={styles.card}>
          <List.Item
            title="Organization Profile"
            left={(props) => <List.Icon {...props} icon="office-building" />}
            style={{ marginBottom: 15, marginTop: 10 }}
            onPress={() => navigation.navigate('OrganizationProfile')}
          />
          <Divider />
          <List.Item
            title="Users"
            left={(props) => <List.Icon {...props} icon="account-group" />}
            style={{ marginBottom: 15, marginTop: 10 }}
            onPress={() => navigation.navigate('UserScreen')}
          />
          <Divider />
          <List.Item
            title="Currency"
            left={(props) => <List.Icon {...props} icon="currency-usd" />}
            style={{ marginBottom: 15, marginTop: 10 }}
            onPress={() => navigation.navigate('Currency')}
          />
          <Divider />
          <List.Item
            title="Taxes"
            left={(props) => <List.Icon {...props} icon="cash-register" />}
            style={{ marginBottom: 15, marginTop: 10 }}
            onPress={() => navigation.navigate('Tax')}
          />
          <Divider />
          <List.Item
            title="Feedback"
            left={(props) => <List.Icon {...props} icon="message-text" />}
            style={{ marginBottom: 15, marginTop: 10 }}
          />
          <Divider />
          <List.Item
            title="Rate us"
            left={(props) => <List.Icon {...props} icon="star" />}
            style={{ marginBottom: 15, marginTop: 10 }}
          />
          <Divider />
          <List.Item
            title="Logout"
            titleStyle={{ color: 'red' }}
            left={(props) => <List.Icon {...props} icon="logout" color="red" />}
            style={{ marginBottom: 15, marginTop: 10 }}
            onPress={() => setLogoutVisible(true)} // Open the logout modal
          />
        </View>
      </View>

      {/* Logout Confirmation Modal */}
      <Portal>
        <Modal
          visible={logoutVisible}
          onDismiss={() => setLogoutVisible(false)} // Close modal when dismissed
          contentContainerStyle={styles.modalContainer}
        >
          <Text style={styles.modalTitle}>Logout Confirmation</Text>
          <Text style={styles.modalMessage}>
            Are you sure you want to log out?
          </Text>
          <View style={styles.modalActions}>
            <Button
              mode="outlined"
              style={styles.cancelButton}
              onPress={() => setLogoutVisible(false)} // Close modal on cancel
            >
              Cancel
            </Button>
            <Button
              mode="contained"
              style={styles.logoutButton}
              onPress={handleLogout} 
            >
              Logout
            </Button>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
  card: {
    width: '90%',
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    paddingVertical: 8,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
  },
  logoutButton: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Settings;