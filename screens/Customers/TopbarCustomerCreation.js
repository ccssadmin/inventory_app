import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TopbarCustomerCreation() {
    const navigation = useNavigation();

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
                    onPress={() => navigation.navigate('Settings')}
                    >
                        <Icon name="contact-mail" size={30} color="white" style={styles.contactIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    topbarContainer: {
        height: 120, 
        flexDirection: 'column',
        justifyContent: 'center', 
        backgroundColor: '#3F0D93',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding : 5
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16, 
    },
    backArrow: {
        marginRight: 10,
    },
    title: {
        fontSize: 20, // Slightly smaller font size
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        flex: 1, // Allow the title to take up remaining space
    },
    contactIcon: {
        marginLeft: 10,
    },
});