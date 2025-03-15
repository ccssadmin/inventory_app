// import { useEffect } from "react";
// import { Image, StyleSheet, Text, View } from "react-native";
// import logo from "../assets/inventory.png";

// const SplashScreen = ( { navigation }) => {

//     useEffect( () => {

//         const timer = setTimeout(() => {
//             navigation.replace('Login')
//         },3000);

//         return () => clearTimeout(timer);

//     } , [navigation])

//     return(
//         <View style= {styles.container}>
//             <Image
//             source={logo}
//             style={styles.logo}
//             />
//             <Text style = { styles.text }>Inventory Management</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create( {
//     container : {
//         flex: 1 , 
//         justifyContent : 'center',
//         alignItems : 'center',
//         backgroundColor : 'white' 
//     },
//     text: {
//         fontSize: 30,
//         fontWeight: '400',
//         fontStyle: 'italic',
//         color: '#3F0D93',
//         marginTop : 10
//     },
//     logo: {
//         width : 100,
//         height : 100 ,
//     },
    
// })

// export default SplashScreen ;



import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/inventory.png";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Ensure "Login" matches the stack navigator name.
    }, 3000);

    return () => clearTimeout(timer); // Clear timer on unmount.
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Inventory Management</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
    fontWeight: "400",
    fontStyle: "italic",
    color: "#3F0D93",
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
