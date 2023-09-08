import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {SIZES, colors} from '../component/theme/theme';
import {CustomTextInput} from '../component/LinearGradient/TextInput';
import btn from '../constants/image';
import {Boy} from '../constants/image';
import {Arrow} from '../constants/image';
import {Girl} from '../constants/image';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {StackRouter, useNavigation} from '@react-navigation/native';
import Stepper from 'react-native-stepper-ui';
import Stepper1 from '../component/LinearGradient/Stepper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ArrowDown,BackgroundImg} from '../constants/image';
import {ArrowUp} from '../constants/image';

const Location = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Shoes');
  };
  const hadleplay=()=>{
    navigation.navigate('StartPlay');
  }
  return (
    <View>
    <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: 230,
              width: 350,
              backgroundColor: 'transparent',
            }}></View>
          <View
            style={{
             height:260,
              width: '95%',
              backgroundColor: 'rgba(250, 250, 256, 0.10)',
              alignSelf: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderBottomColor: '#8DC388',
              borderTopColor: '#814F81',
              borderLeftColor: '#9CA6C9',
              borderRightColor: '#9CA6C9',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 30,
                color: colors.white,
                marginVertical: RH(3),
              fontWeight:500
              }}>
              Use your location
            </Text>
            <View style={{width:'80%'}}>

            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                alignItems:'center',
                color: colors.white,
                fontWeight:400,
               
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Velit
              fusce mauris augue urna, elit lacus sit lacus.
            </Text>
            </View>
            <TouchableOpacity style={Styles.btn} >
              <Text style={{alignSelf: 'center', color: colors.white}}>
                Allow
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Location;
const Styles = StyleSheet.create({
  btn: {
    color: colors.white,
    borderWidth: 2,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    borderRadius: 20,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: RH(5),
    width: 102,

    textAlign: 'center',
  },
});
