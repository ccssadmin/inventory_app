import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Text, TextInput, Card, Button, RadioButton, IconButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import TopbarCustomerCreation from "../Customers/TopbarCustomerCreation";
import { useNavigation } from "@react-navigation/native";

export default function AddProductScreen() {
  const [productType, setProductType] = useState("Good");
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  // Function to handle image selection
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    // Launch the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <TopbarCustomerCreation />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>New Product</Text>

            {/* Image Upload Section */}
            <TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
              {image ? (
                <Image source={{ uri: image }} style={styles.imagePreview} />
              ) : (
                <>
                  <IconButton icon="camera" size={24} />
                  <Text style={styles.addImageText}>+ Add Image</Text>
                </>
              )}
            </TouchableOpacity>

            <View style={styles.radioGroup}>
              <RadioButton
                value="Good"
                status={productType === "Good" ? "checked" : "unchecked"}
                onPress={() => setProductType("Good")}
              />
              <Text>Good</Text>
              <RadioButton
                value="Service"
                status={productType === "Service" ? "checked" : "unchecked"}
                onPress={() => setProductType("Service")}
              />
              <Text>Service</Text>
            </View>

            <TextInput label="Item Name *" mode="outlined" style={styles.input} />
            <TextInput label="Description" mode="outlined" style={styles.input} />
            <TextInput
              label="Wholesale Price *"
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInput
              label="Retail Price *"
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInput
              label="Accounts *"
              mode="outlined"
              right={<TextInput.Icon icon="chevron-down" />}
              style={styles.input}
            />
          </Card>

          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>Vendor Information</Text>
            <TextInput 
            label="Vendor Name" 
            mode="outlined" 
            style={styles.input} />

            <TextInput
            label='Company Name'
            mode="outlined"
            style={styles.input}
            />

            <TextInput
            label='Display Name'
            mode="outlined"
            style={styles.input}
            />

            <TextInput
            label='Email ID'
            mode="outlined"
            style={styles.input}
            />

            <TextInput
            label='Phone'
            mode="outlined"
            style={styles.input}
            />

          </Card>
          <View style = {styles.btnContainer}>
          <Button
            mode="text"
            textColor="red"
            style={styles.cancelButton}
            onPress={() => console.log("Product Added")}
          >
            Cancel
          </Button>

          <Button
            mode="contained"
            style={styles.submitButton}
            onPress={() => navigation.navigate('Products')}
          >
            Save
          </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, 
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  imageUpload: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  addImageText: {
    fontSize: 14,
    color: "#555",
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  btnContainer : {
    justifyContent : 'center',
    alignSelf : 'center'
  },
  submitButton: {
    marginTop: 16,
    padding: 5,
    backgroundColor: "#FACC15",
    width : 150,
    borderRadius: 5 , 

  },
  cancelButton: {
    marginTop: 16,
    padding: 10,
  },
});