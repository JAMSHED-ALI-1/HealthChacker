import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  red100,
  transparent,
} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
const hockyman = require('../assets/images/HockyMan.png');
import {SIZES, colors} from '../theme/theme';
import {bikeImage} from '../../constants/image';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Button1 = ({text, onPress}) => {
  return (
   

      <TouchableOpacity style={styles.loginbtn} onPress={onPress}>
        <Text style={{color: colors.white, fontSize: SIZES.btn}}>{text}</Text>
      </TouchableOpacity>
   
    );
};

export default Button1;

const styles = StyleSheet.create({
  loginbtn: {
    // padding:20,
    height: 59,
    // width: 330,
    // alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    // elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    // padding:20
    marginHorizontal:10
  },
  registerbtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
