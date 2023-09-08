import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';


const Account_Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_heading}>Account Details</Text>
        <Image
          source={require('./Assets_1/Images/hero.png')}
          resizeMode="contain"
          style={styles.hero}
        />
        <Text style={styles.text_heading}>Aadya Shrivastava</Text>
        <Text style={styles.text_Normal}>Aadya_1260</Text>
      </View>
      <View>
        <Text>Other Details:</Text>
        <View>
        <AntDesign name="phone" size={14} />
        <Text>+91 870723028</Text>
        </View>
      </View>
    </View>
  );
}

export default Account_Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20
  },
  header: {
    alignItems: 'center',
    marginTop: 12,
  },
  hero: {
    height: 86,
    width: 86,
    marginTop: 32,
  },
  text_heading: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Gilroy-SemiBold',
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop:12
  },
  text_Normal: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Gilroy-Regular',
    color: 'rgba(0, 0, 0, 0.87)',
  },
});