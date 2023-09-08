import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Touchable,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import {SIZES, colors} from '../component/theme/theme';
import btn from '../constants/image';

import {Arrow, BackgroundImg} from '../constants/image';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Button1 from '../component/LinearGradient/Button';
import CustomTextInput from '../component/LinearGradient/TextInput';
const ForgetPassword = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [successfully, setsuccessfully] = useState(false);
  const navigation = useNavigation();
  const handleButtonClick = () => {
    // Implement the action you want to perform when the button is clicked
    console.log('Button clicked');
    setsuccessfully(true);
  };
  const handleForget = () => {
    navigation.navigate('CreateNewPass');
  };
  setTimeout(() => {
    setsuccessfully(false);
  }, 2000);
  const handleBackbtn = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.conatiner}>
          <TouchableOpacity onPress={handleBackbtn}>
            <Image
              source={Arrow}
              resizeMode="contain"
              style={styles.ArrowImg}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              color: colors.white,
              marginVertical: RH(5),
              fontWeight: 900,
            }}>
            Reset password
          </Text>
          <View style={{gap: RH(4)}}>
            <View>
              <Text style={styles.textcolor}>Email</Text>
              <CustomTextInput placeholder={'Enter Email'} icon={'email'}/>
            </View>
            <View>
              <Text
                style={{
                  fontSize: SIZES.secondry,
                  color: colors.white,
                }}>
                Enter Code
              </Text>
              <CustomTextInput placeholder={'Enter Code'} icon={'lock'} />
            </View>
            {/* <TouchableOpacity
              style={styles.setCode}
              onPress={handleButtonClick}>
              <Text style={{alignSelf: 'center', color: colors.white}}>
                ReSentCode
              </Text>
            </TouchableOpacity> */}
            <View style={{marginTop:40}}>

            <Button1 onPress={handleForget} text={'Reset Password'} />
            </View>
            {successfully && (
              <>
                <View style={styles.codeSentsuccessfully}>
                  <Text style={{color: colors.white}}>
                    Code Sent successfully
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  setCode: {
    height: RH(4),
    borderWidth: 1,
    borderColor: 'pink',
    width: RW(25),
    alignSelf: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 20,
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
  codeSentsuccessfully: {
    height: RH(4),
    width: RW(55),
    backgroundColor: '#474747',
    borderWidth: 2,
    borderColor: '#474747',
    marginVertical: RH(5),
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //  display:'none'
  },
  ArrowImg: {
    height: 24,
    width: 24,
    marginTop: 20,
  },
  conatiner: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textcolor: {
    color: '#fff',
    fontSize: 16,
  },
});
