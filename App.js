import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Button, } from 'react-native';
import styles from './App.style'
import Header from './components/Head/index'
import Bodyer from './components/Body/index'
import Footer from './components/Foot/index'


export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      
      <Header/>

      {/* Tieu de */}
        <View style={styles.bodyText}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Text style={styles.textBody}>Cho bạn</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textBody}>Bảng xếp hạng</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textBody}>Trẻ em</Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={styles.textBody}>Có tính phí</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textBody}>Không tính phí</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      

      {/* Body */}
      
      <Bodyer/>

      {/* Footer */}
      
      <Footer/>

    </View>
  );
}

