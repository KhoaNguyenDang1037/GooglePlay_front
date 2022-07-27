import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Button, } from 'react-native';
import React from 'react';
import styles from './style'

const Footer = () => {
    return (
        <View style={styles.foot}>
            
            <View style={styles.footBg}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.footIcon} source={require('../../picture/game.png')}/>
            </TouchableOpacity>
            <Text style={styles.footText}>Trò chơi</Text>
            </View>

            <View style={styles.footBg}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.footIcon} source={require('../../picture/ungdung.png')}/>
            </TouchableOpacity>
            <Text style={styles.footText}>Ứng dụng</Text>
            </View>

            <View style={styles.footBg}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.footIcon} source={require('../../picture/phim.png')}/>
            </TouchableOpacity>
            <Text style={styles.footText}>Phim</Text>
            </View>

            <View style={styles.footBg}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.footIcon} source={require('../../picture/book.png')}/>
            </TouchableOpacity>
            <Text style={styles.footText}>Sách</Text>
            </View>

        </View>
    )
};

export default Footer;