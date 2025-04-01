import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function Topbar() {
    const [activeButton, setActiveButton] = useState('wholesale'); 
    const navigation = useNavigation();

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#730aa3"/>
            
            <View style={styles.topbarContainer}>

                <View style={{ flexDirection : 'row' , justifyContent : 'space-around'}}>
                    <Text style={styles.title}>Crestclimber Software</Text>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                    >
                        <Icon name="contact-mail" size={30} color="white" style={styles.contactIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.btnContainer}>
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
                </View>

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
        width: 395,
        marginBottom : 20,
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: 'white', 
        marginTop: 15,
        marginLeft : -15
    },
    contactIcon: {
        marginRight: 6,
        marginTop: 17 
    },
    btnContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#3F0D93', 
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
