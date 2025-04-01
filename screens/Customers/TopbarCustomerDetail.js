import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function TopbarCustomerDetail() {

    const navigation = useNavigation();


    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#8a2be2" />
            
            <View style={styles.topbarContainer}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
                        <Icon name="arrow-back" size={30} color="white" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Crestclimber Software</Text>

                   <TouchableOpacity
                    onPress={() => navigation.navigate('Settings' , { screen : 'Settings'})}
                    >
                        <Icon name="contact-mail" size={30} color="white" style={styles.contactIcon} />
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.btnContainer}>
                    <TouchableOpacity 
                        style={[styles.button, activeButton === 'wholesale' && styles.activeButton]} 
                        onPress={() => handleButtonClick('wholesale')}
                    >
                        <Text style={styles.buttonText}>Wholesale</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, activeButton === 'retail' && styles.activeButton]} 
                        onPress={() => handleButtonClick('retail')}
                    >
                        <Text style={styles.buttonText}>Retail</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    topbarContainer: {
        flex: 0.3,
        flexDirection: 'column', 
        justifyContent: 'space-evenly', 
        backgroundColor: '#3F0D93', 
        width: '100%',
        marginBottom: 20,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: -15,
    },
    backArrow: {
        marginRight: 10,
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: 'white',
        flex: 1, 
        textAlign: 'center',
    },
    contactIcon: {
        marginLeft: 10,
    },
    btnContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#8a2be2', 
        paddingVertical: 12,
        paddingHorizontal: 30,
        margin: 5,
        borderRadius: 25,
        elevation: 3, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeButton: {
        backgroundColor: '#d1cec9', 
    },
});
