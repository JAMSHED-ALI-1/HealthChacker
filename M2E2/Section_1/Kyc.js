import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import Customheader from './header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../src/component/theme/theme';
import { useNavigation } from '@react-navigation/native';


const Kyc = () => {
     const navigation=useNavigation()
  const handleAccount_Detail=()=>{
    navigation.navigate('Account_Details')
  }
  return (
    <View style={styles.container}>
      <Customheader />
      <View style={styles.hero_Body}>
        <TouchableOpacity style={styles.body_Part} onPress={handleAccount_Detail}>
          <Text style={styles.body_text}>Account Details</Text>
          <AntDesign name="right" size={10} style={styles.body_text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.body_Part}>
          <Text style={styles.body_text}>KYC</Text>
          <Text>
            Status:<Text style={styles.approved}>Approved</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body_Part}>
          <Text style={styles.body_text}>Terms of Service</Text>
          <AntDesign name="right" size={10} style={styles.body_text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.body_Part}>
          <Text style={styles.body_text}>Terms and Conidtions</Text>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.body_Part}>
          <Text style={styles.body_text}>Delete Account</Text>
      
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Kyc

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 15,
  },
  chevron_left: {
      height: 5,
      width: 9,
  },
  body_text: {
      fontFamily: 'Gilroy-Regular',
      fontSize: 16,
      fontWeight: '400',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    approved: {
        color: '#32D82F',
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold',
        fontWeight: '400',
        lineHeight: 19,
    },
    hero_Body: {
        justifyContent: 'space-between',
        marginTop: 35,
        gap: 25,
    },
    body_Part: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
});