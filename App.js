import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons'; 
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Dashboard from './screens/Dashboard';
import Sales from './screens/Sales';
import Purchase from './screens/Purchase';
import Products from './screens/Products';
import Customers from './screens/Customers';
import CreateScreen from './screens/Dashboard/CreateScreen';
import CustomerCreation from './screens/Customers/CustomerCreation';
import CustomerDetailScreen from './screens/Customers/CustomerDetailScreen';
import AddProductScreen from './screens/Products/AddProductScreen';
import Settings from './screens/Settings';
import OrganizationProfile from './screens/Settings/OrganizationProfile';
import UserScreen from './screens/Settings/UserScreen';
import UserAddScreen from './screens/Settings/UserAddScreen';
import CurrencyScreen from './screens/Settings/CurrencyScreen';
import TaxesScreen from './screens/Settings/TaxesScreen';
import DetailSaleOrderScreen from './screens/Sales/DetailSalesOrderScreen';
import DetailPurchaseOrderScreen from './screens/Purchase/DetailPurchaseOrderScreen';
import SalesOrderScreen from './screens/Sales/SalesOrderScreen';
import SalesProductOrderScreen from './screens/Sales/SalesProductOrderScreen';
import PurchaseOrderScreen from './screens/Purchase/PurchaseOrderScreen';
import PurchaseProductOrderScreen from './screens/Purchase/PurchaseProductOrderScreen';
import VendorAddScreen from './screens/Vendor/VendorAddScreen';
import InvoiceScreen from './screens/Invoice';
import InvoiceListScreen from './screens/Invoice/InvoiceListScreen';
import InvoiceDetailedScreen from './screens/Invoice/InvoiceDetailedScreen';
import BillScreen from './screens/Bills';
import BillsListScreen from './screens/Bills/BillsListScreen';
import BillsDetailedScreen from './screens/Bills/BillsDetailsScreen';
import ForgetPassword from './components/ForgetPassword';
import ResetCode from './components/ResetCode';
import ResetPassword from './components/ResetPassword';
import { ApolloProvider } from '@apollo/client';
import client from './api/client';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function DashboardStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function CustomerStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Customers"
          component={Customers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomerCreation"
          component={CustomerCreation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomerDetails"
          component={CustomerDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function ProductStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function SaleStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Sales"
          component={Sales}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SalesOrder"
          component={SalesOrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailSaleOrder"
          component={DetailSaleOrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SalesProductOrder"
          component={SalesProductOrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Invoice"
          component={InvoiceStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bills"
          component={BillStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function SettingStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrganizationProfile"
          component={OrganizationProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddUser"
          component={UserAddScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Currency"
          component={CurrencyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tax"
          component={TaxesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function PurchaseStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Purchase"
          component={Purchase}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailPurchaseOrder"
          component={DetailPurchaseOrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PurchaseOrder"
          component={PurchaseOrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PurchaseProductOrder"
          component={PurchaseProductOrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VendorAdd"
          component={VendorStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function VendorStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="VendorAdd"
          component={VendorAddScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function InvoiceStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Invoice"
          component={InvoiceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InvoiceList"
          component={InvoiceListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InvoiceDetailScreen"
          component={InvoiceDetailedScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function BillStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Bills"
          component={BillScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BillsList"
          component={BillsListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BillsDetailedScreen"
          component={BillsDetailedScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 80,
            paddingBottom: 10,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sales"
          component={SaleStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Purchase"
          component={PurchaseStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cash-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Products"
          component={ProductStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pricetag-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Customers"
          component={CustomerStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <ApolloProvider client={client}>
    <PaperProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
          name='ForgetPassword'
          component={ForgetPassword}
          options={ { headerShown : false}}
          />
          <Stack.Screen
          name='ResetCode'
          component={ResetCode}
          options={ {  headerShown : false}}
          />
          <Stack.Screen 
          name='ResetPassword'
          component={ResetPassword}
          options={ { headerShown : false}}
          />
          <Stack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </ApolloProvider>
  );
}