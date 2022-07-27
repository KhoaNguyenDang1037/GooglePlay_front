import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Button, } from 'react-native';
import React from 'react';
import styles from './style'

const Header = () => {
    return (
        <View style={styles.head}>
            <Image style={styles.headIcon} source={require('../../picture/search.png')}/>
            <TextInput style={styles.headText} placeholder='Tìm kiếm'></TextInput>
            <TouchableOpacity>
            <Image style={styles.headIcon1} source={require('../../picture/talk.png')}/>
            </TouchableOpacity>
        </View>
    )
};

export default Header;