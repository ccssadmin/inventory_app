// import React from "react";
// import { ScrollView, View, StyleSheet } from "react-native";
// import { Card, Text, Avatar, IconButton, TextInput } from "react-native-paper";
// import TopbarCustomer from "../Customers/TopbarCustomer";

// export default function Sales( {navigation}) {
//   const salesOrders = [
//     {
//       id: 1,
//       company: "JJ Enterprises",
//       contact: "Jeya Surya",
//       totalPrice: "₹ 16,00,000",
//       paymentTerm: "Credit - 30 days",
//       orderNo: "#SO-0001",
//       date: "24 Feb - 2:02 pm",
//       avatarColor: "red",
//     },
//     {
//       id: 2,
//       company: "JS Enterprises",
//       contact: "Jas",
//       totalPrice: "₹ 12,00,000",
//       paymentTerm: "Paid",
//       orderNo: "#SO-0002",
//       date: "24 Feb - 2:02 pm",
//       avatarColor: "yellow",
//     },
//     {
//       id: 3,
//       company: "AK Enterprises",
//       contact: "AJITH ",
//       totalPrice: "₹ 12,00,000",
//       paymentTerm: "Paid",
//       orderNo: "#SO-0003",
//       date: "24 Feb - 2:02 pm",
//       avatarColor: "yellow",
//     },
//     {
//       id: 4,
//       company: "AK Enterprises",
//       contact: "AJITH ",
//       totalPrice: "₹ 12,00,000",
//       paymentTerm: "Paid",
//       orderNo: "#SO-0003",
//       date: "24 Feb - 2:02 pm",
//       avatarColor: "yellow",
//     },
//     {
//       id: 5,
//       company: "AK Enterprises",
//       contact: "AJITH ",
//       totalPrice: "₹ 12,00,000",
//       paymentTerm: "Paid",
//       orderNo: "#SO-0003",
//       date: "24 Feb - 2:02 pm",
//       avatarColor: "yellow",
//     },
//   ];

//   return (
//     <>
//     <TopbarCustomer />
//     <ScrollView contentContainerStyle={styles.container}>
//       <TextInput
//       mode="outlined"
//       label="🔍 Search SO"
//       style={styles.input}
//       />
//       <View style={styles.header}>
//         <Text style={styles.title}>Recent SO</Text>
//         <IconButton icon="calendar" size={24} onPress={() => {}} />
//       </View>
//       {salesOrders.map((order) => (
//         <Card key={order.id} style={styles.card} onPress={() => navigation.navigate('DetailSaleOrder')}>
//           <View style={styles.cardContent}>
//             <Avatar.Text
//               label={order.company.charAt(0)}
//               size={40}
//               color="white"
//               style={[styles.avatar, { backgroundColor: order.avatarColor }]}
//             />
//             <View style={styles.info}>
//               <Text style={styles.company}>{order.company}</Text>
//               <Text style={styles.contact}>{order.contact}</Text>
//             </View>
//             <Text style={styles.orderNo}>{order.orderNo}</Text>
//           </View>
//           <View style={styles.cardFooter}>
//             <View style={styles.footerSection}>
//               <Text style={styles.footerLabel}>Total Prize</Text>
//               <Text style={styles.footerValue}>{order.totalPrice}</Text>
//             </View>
//             <View style={styles.footerSection}>
//               <Text style={styles.footerLabel}>Payment Term</Text>
//               <Text
//                 style={[
//                   styles.footerValue,
//                   order.paymentTerm === "Paid" ? styles.paid : styles.credit,
//                 ]}
//               >
//                 {order.paymentTerm}
//               </Text>
//             </View>
//           </View>
//         </Card>
//       ))}
//     </ScrollView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//   },
  
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   input: {
//     marginBottom: 16,
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//   },
//   card: {
//     marginBottom: 16,
//     borderRadius: 8,
//     backgroundColor : 'white'
//   },
//   cardContent: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//   },
//   avatar: {
//     marginRight: 16,
//   },
//   info: {
//     flex: 1,
//   },
//   company: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   contact: {
//     color: "#777",
//   },
//   orderNo: {
//     color: "#777",
//   },
//   cardFooter: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderTopWidth: 1,
//     borderTopColor: "#eee",
//     padding: 16,
//   },
//   footerSection: {
//     alignItems: "flex-start",
//   },
//   footerLabel: {
//     color: "#777",
//   },
//   footerValue: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   paid: {
//     color: "green",
//   },
//   credit: {
//     color: "blue",
//   },
// });


import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text, Avatar, IconButton, TextInput } from "react-native-paper";
import TopbarCustomer from "../Customers/TopbarCustomer";

export default function Sales({ navigation }) {
  const salesOrders = [
    {
      id: 1,
      company: "JJ Enterprises",
      contact: "Jeya Surya",
      totalPrice: "₹ 16,00,000",
      paymentTerm: "Credit - 30 days",
      orderNo: "#SO-0001",
      date: "24 Feb - 2:02 pm",
      avatarColor: "red",
    },
    {
      id: 2,
      company: "JS Enterprises",
      contact: "Jas",
      totalPrice: "₹ 12,00,000",
      paymentTerm: "Paid",
      orderNo: "#SO-0002",
      date: "24 Feb - 2:02 pm",
      avatarColor: "yellow",
    },
    {
      id: 3,
      company: "AK Enterprises",
      contact: "AJITH ",
      totalPrice: "₹ 12,00,000",
      paymentTerm: "Paid",
      orderNo: "#SO-0003",
      date: "24 Feb - 2:02 pm",
      avatarColor: "yellow",
    },
    {
      id: 4,
      company: "AK Enterprises",
      contact: "AJITH ",
      totalPrice: "₹ 12,00,000",
      paymentTerm: "Paid",
      orderNo: "#SO-0003",
      date: "24 Feb - 2:02 pm",
      avatarColor: "yellow",
    },
    {
      id: 5,
      company: "AK Enterprises",
      contact: "AJITH ",
      totalPrice: "₹ 12,00,000",
      paymentTerm: "Paid",
      orderNo: "#SO-0003",
      date: "24 Feb - 2:02 pm",
      avatarColor: "yellow",
    },
  ];

  return (
    <>
      <TopbarCustomer />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput mode="outlined" label="🔍 Search SO" style={styles.input} />
        <View style={styles.header}>
          <Text style={styles.title}>Recent SO</Text>
          <IconButton icon="calendar" size={24} onPress={() => {}} />
        </View>
        {salesOrders.map((order) => (
          <Card key={order.id} style={styles.card} onPress={() => navigation.navigate('DetailSaleOrder')}>
            <View style={styles.cardContent}>
              <Avatar.Text
                label={order.company.charAt(0)}
                size={40}
                color="white"
                style={[styles.avatar, { backgroundColor: order.avatarColor }]}
              />
              <View style={styles.info}>
                <Text style={styles.company}>{order.company}</Text>
                <Text style={styles.contact}>{order.contact}</Text>
              </View>
              <Text style={styles.orderNo}>{order.orderNo}</Text>
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.footerSection}>
                <Text style={styles.footerLabel}>Total Prize</Text>
                <Text style={styles.footerValue}>{order.totalPrice}</Text>
              </View>
              <View style={styles.footerSection}>
                <Text style={styles.footerLabel}>Payment Term</Text>
                <Text
                  style={[
                    styles.footerValue,
                    order.paymentTerm === "Paid" ? styles.paid : styles.credit,
                  ]}
                >
                  {order.paymentTerm}
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the content expands to fill the screen and allows scrolling
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
    paddingLeft: 10,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "white",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  company: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contact: {
    color: "#777",
  },
  orderNo: {
    color: "#777",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 16,
  },
  footerSection: {
    alignItems: "flex-start",
  },
  footerLabel: {
    color: "#777",
  },
  footerValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paid: {
    color: "green",
  },
  credit: {
    color: "blue",
  },
});
