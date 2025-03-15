import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Assetimg from "../assets/loginimg.png";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../api/mutations/loginMutation";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login  , {loading , error}] = useMutation(LOGIN_MUTATION);

  const handleLogin = async () => {

    // try {
    //   const { data } = await login( {
    //     variables : {
    //       username , password
    //     }
    //   });

    //   if (data.login.success) {
    //     alert("Login Successful!");
        // navigation.replace("Tabs");
    //   } else {
    //     alert(data.login.message || "Login failed");
    //   }

    // } catch (error) {
    //    alert("Error: " + err.message);
    // }

    navigation.replace("Tabs");
  };

  const handleForgetPassword = () => {
    navigation.replace("ForgetPasssword");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>

      <Text style={styles.instructionText}>
        Sign in to continue managing your account
      </Text>

      
      <TextInput
        label="Username"
        mode="outlined"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      <TouchableOpacity
      onPress={ () => navigation.navigate('ForgetPassword')}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.btn}
        labelStyle={styles.btnTxt}
        loading = {loading}
        disabled = {loading}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
        {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={Assetimg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor : 'white'
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3F0D93",
    marginTop: 100,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 28,
    textAlign: "center",
    color: "#606060",
  },
  input: {
    width: "100%",
    marginBottom: 18,
    backgroundColor: "white",
    marginTop : 10 
  },
  forgotPasswordText: {
    color: "#007BFF",
    marginBottom: 16,
    marginLeft: 200,
    marginTop: 10,
  },
  imageContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  image: {
    width: 380,
    height: 100,
    borderRadius: 8,
  },
  btn: {
    marginTop: 10,
    width: 200,
    height: 50,
    justifyContent: "center",
    borderRadius: 8,
    elevation: 5,
    backgroundColor: "#f5b840",
  },
  btnTxt: {
    fontSize: 18,
    color: "white",
  },
});
