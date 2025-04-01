
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Assetimg from "../assets/loginimg.png";

export default function ResetPassword({ navigation }) {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = () => {
        navigation.replace('Tabs')
    }


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Reset Password</Text>

      <Text style={styles.instructionText}>
        Change Password Now 
      </Text>

      <TextInput
        label="New Password"
        mode="outlined"
        textContentType="password"
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        style={styles.input}
      />

    <TextInput
        label="Confirm Password"
        mode="outlined"
        textContentType="password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.input}
      />

      
     

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.btn}
        labelStyle={styles.btnTxt}
      >
        Submit
      </Button>

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
    marginTop: 100
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
    marginBottom : 120
  },
  btnTxt: {
    fontSize: 18,
    color: "white",
  },
});
