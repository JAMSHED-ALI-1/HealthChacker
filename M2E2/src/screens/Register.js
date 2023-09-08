import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Bike100} from '../constants/image';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SIZES, colors} from '../component/theme/theme';
import {Appbar, Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Button1 from '../component/LinearGradient/Button';
import CustomTextInput from '../component/LinearGradient/TextInput';
import { BackgroundImg } from '../constants/image';

const Register = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate('SelectGender');
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#81016'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image source={Bike100} />
            <Text
              style={{
                fontSize: 14,
                color: colors.white,
                fontFamily: 'Sen-Medium',
              }}>
              Welcome to Moonstep
            </Text>
            <Text style={styles.textStyle}>Register</Text>
            {/* <Appbar backgroundColor={'#093615'} /> */}
          </View>
          <View style={{paddingHorizontal:20, gap: RH(4)}}>
            <View>
              <Text style={{fontSize: SIZES.secondry, color: colors.white}}>
                Email
              </Text>
              <CustomTextInput
                placeholder="Enter Email Address"
                icon={'email'}
              />
            </View>
            <View>
              <Text style={{fontSize: SIZES.secondry, color: colors.white}}>
                Phone Number
              </Text>
              <CustomTextInput
                placeholder={'Enter Phone Number'}
                icon={'phone'}
              />
            </View>
            <View>
              <Text style={{fontSize: SIZES.secondry, color: colors.white}}>
                Password
              </Text>
              <CustomTextInput placeholder="Password" icon={'lock'} />
            </View>
            <View>
              <Text style={{fontSize: SIZES.secondry, color: colors.white}}>
                Confirm Password
              </Text>
              <CustomTextInput placeholder={'Confirm Password'} icon={'lock'} />
            </View>
            <View>
              <Button1 text={'Register'} onPress={handleRegister} />
            </View>
          </View>
          <StatusBar backgroundColor={'#093615'} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    marginVertical: RH(1),
    gap: RH(1.5),
  },
  textStyle: {
    color: colors.white,
    fontSize: RFS(4),
    alignSelf: 'center',
    fontFamily: 'SairaSemiCondensed-Medium',
    marginTop: RH(5),
  },
  btn: {
    color: colors.white,
    borderWidth: 2,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    borderRadius: 10,
    height: RH(6),
    justifyContent: 'center',
  },
   loginbtn: {
    height: RH(7),
    borderWidth: 2,
    borderRadius: RH(1),
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
     shadowOpacity: 1,
    shadowRadius: RH(1),
    alignItems: 'center',
    marginVertical: RH(3),
    justifyContent: 'center',
  }
});
