import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Button, } from 'react-native';
import React from 'react';
import styles from './style'


const Bodyer = () => {
    return (
        <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>

        {/* tro choi dang ky truoc */}
          <View style={styles.body1}> 
              <TouchableOpacity> 
                <Text style={styles.body1Text}>Trò chơi đăng ký trước</Text>
                <Text style={styles.body2Text}>Sắp ra mắt trên Google Play</Text>

              </TouchableOpacity>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginLeft: 10, paddingVertical: 10}}>

                  <TouchableOpacity>
                    <Image style={styles.body1Pic} source={require('../../picture/game1.jpg')}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.bodyfix}>
                      <Image style={styles.body2Pic} source={require('../../picture/game1.jpg')}/>
                      <View style={{marginHorizontal: 10,}}>
                        <Text style={styles.textBody}>The binding of Issac</Text>
                        <Text style={styles.textBody2}>Nhập vai - Chiến đấu</Text>
                        <Text style={styles.textBody2}>4.5* 95MB - Sắp có</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                </View>
                
                <View style={{marginLeft: 10, paddingVertical: 10}}>

                  <TouchableOpacity>
                    <Image style={styles.body1Pic} source={require('../../picture/game2.jpg')}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.bodyfix}>
                      <Image style={styles.body2Pic} source={require('../../picture/game2.jpg')}/>
                      <View style={{marginHorizontal: 10,}}>
                        <Text style={styles.textBody}>Hades</Text>
                        <Text style={styles.textBody2}>Nhập vai - Chiến đấu</Text>
                        <Text style={styles.textBody2}>4* 125MB - Đã cài đặt</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                </View>

              </ScrollView>

            </View>
          
          {/* tro choi de xuat */}
          <View style={styles.body2}>

            <TouchableOpacity> 
              <Text style={styles.body1Text}>Được đề xuất cho bạn</Text>
              <Text style={styles.body2Text}>Quảng cáo</Text>
            </TouchableOpacity>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View style={{marginLeft: 10, paddingVertical: 10}}>

                  <TouchableOpacity>
                    <Image style={styles.body1Pic} source={require('../../picture/game2.jpg')}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.bodyfix}>
                      <Image style={styles.body2Pic} source={require('../../picture/game2.jpg')}/>
                      <View style={{marginHorizontal: 10,}}>
                        <Text style={styles.textBody}>Hades</Text>
                        <Text style={styles.textBody2}>Nhập vai - Chiến đấu</Text>
                        <Text style={styles.textBody2}>4* 125MB - Đã cài đặt</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                </View>
                
                <View style={{marginLeft: 10, paddingVertical: 10}}>

                  <TouchableOpacity>
                    <Image style={styles.body1Pic} source={require('../../picture/game3.jpg')}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.bodyfix}>
                      <Image style={styles.body2Pic} source={require('../../picture/game3.jpg')}/>
                      <View style={{marginHorizontal: 10,}}>
                        <Text style={styles.textBody}>Ninja School</Text>
                        <Text style={styles.textBody2}>Nhập vai - Chiến đấu</Text>
                        <Text style={styles.textBody2}>4.2* 100MB - Chưa cài đặt</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                </View>

              </ScrollView>

          </View>

          {/* tro choi moi nhat */}
          <View style={styles.body2}>
            <TouchableOpacity> 
              <Text style={styles.body1Text}>Trò chơi mới nhất</Text>
              <Text style={styles.body2Text}>Được phát hành gần nhất trên Google Play</Text>
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginLeft: 10, paddingVertical: 10}}>

                  <TouchableOpacity>
                    <Image style={styles.body1Pic} source={require('../../picture/game3.jpg')}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.bodyfix}>
                      <Image style={styles.body2Pic} source={require('../../picture/game3.jpg')}/>
                      <View style={{marginHorizontal: 10,}}>

                        <Text style={styles.textBody}>Ninja School</Text>
                        <Text style={styles.textBody2}>Nhập vai - Chiến đấu</Text>
                        <Text style={styles.textBody2}>4.2* 100MB - Chưa cài đặt</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                </View>
                
                <View style={{marginLeft: 10, paddingVertical: 10}}>

                  <TouchableOpacity>
                    <Image style={styles.body1Pic} source={require('../../picture/game1.jpg')}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.bodyfix}>
                      <Image style={styles.body2Pic} source={require('../../picture/game1.jpg')}/>
                      <View style={{marginHorizontal: 10,}}>
                        <Text style={styles.textBody}>The binding of Issac</Text>
                        <Text style={styles.textBody2}>Nhập vai - Chiến đấu</Text>
                        <Text style={styles.textBody2}>4.5* 95MB - Sắp có</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                </View>

              </ScrollView>
              
          </View>

        </ScrollView>
          
    </View>
    )
};

export default Bodyer;