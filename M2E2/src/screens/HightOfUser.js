import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Touchable,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,ImageBackground
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
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
import {useNavigation} from '@react-navigation/native';
import Stepper from 'react-native-stepper-ui';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ArrowDown} from '../constants/image';
import {ArrowUp,BackgroundImg} from '../constants/image';
// import Stepper1 from '../component/LinearGradient/Stepper';
import CustomStepIndicator from '../component/LinearGradient/CustomStepper';
import Button1 from '../component/LinearGradient/Button';

const SelectGender = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const [count, setcount] = useState(0);
  const [gram, setgram] = useState(0);
  const HandleBack = () => {
    navigation.navigate('WeightOfUser');
  };
  const [currentPosition, setCurrentPosition] = useState(0);

  const hanleSubmit1 = () => {
    setCurrentPosition(prevPosition => prevPosition + 1); // Move to the next step
  };
  const hanleSubmit = () => {
    navigation.navigate('Location');
  };
  const Increament = () => {
    count < 120 ? setcount(prevCount => prevCount + 1) : null;
  };
  const Decrement = () => {
    count > 0 ? setcount(prevCount => prevCount - 1) : null;
  };

  const IncrementGram = () => {
    gram < 10 ? setgram(gram1 => gram1 + 1) : null;
  };
  const DecrementGram = () => {
    gram > 0 ? setgram(gram1 => gram1 - 1) : null;
  };
  return (
    <KeyboardAvoidingView>
     <StatusBar backgroundColor={'#091515'} />
        <ImageBackground
          source={BackgroundImg}
          style={{height: '100%', width: '100%'}}>
          <View style={styles.conatiner}>
            <View style={styles.header}>
             
        <ScrollView>
          <TouchableOpacity onPress={HandleBack}>
            <Image
              source={Arrow}
              resizeMode="contain"
              style={{height: RH(3), width: RW(6), margin: 12}}
            />
          </TouchableOpacity>
          {/* <View style={{}}>
          <View style={{width: '100%', alignItems: 'center', padding: 60}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: 'green',
              }}>
              <View
                style={{
                  width: 6,
                  height: 100,
                  backgroundColor: 'green',
                }}></View>
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: 'green',
              }}>
            
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: 'green',
              }}></View>
          </View>
        </View> */}
          {/* <Stepper1 page={3} /> */}
          <CustomStepIndicator currentPosition={currentPosition + 2} />
          <View style={{alignItems: 'center', marginTop: RH(7)}}>
            <Text style={{fontSize: 30, color: colors.white, fontWeight: 700}}>
              How much do you height?
            </Text>
            <Text style={styles.text}>Please choose your height.</Text>
          </View>
          <View style={styles.maincontainer}>
            <View style={styles.images}>
              <View style={styles.imageCountainer1}>
                <TouchableOpacity onPress={Increament}>
                  <Image source={ArrowUp} />
                </TouchableOpacity>
                <View style={styles.weightcontaint}>
                  <Text style={styles.count}>{count}</Text>
                </View>
                <View style={styles.spacebetween}></View>
                <TouchableOpacity onPress={Decrement}>
                  <Image source={ArrowDown} />
                </TouchableOpacity>
              </View>
              <View style={styles.imageCountainer}>
                <TouchableOpacity onPress={IncrementGram}>
                  <Image source={ArrowUp} />
                </TouchableOpacity>
                <View style={styles.weightcontaint}>
                  <Text style={styles.count}>{gram}</Text>
                </View>
                <TouchableOpacity onPress={DecrementGram}>
                  <Image source={ArrowDown} />
                </TouchableOpacity>
                <View style={styles.spacebetween1}>
                  <Text style={{color: colors.white, fontSize: RFS(2)}}>
                    CM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{width: '90%', alignSelf: 'center', marginVertical: RH(12)}}>
            <Button1 text={'Done'} onPress={hanleSubmit} />
          </View>
        </ScrollView>
      </View>
      </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SelectGender;
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
    marginVertical: RH(9),
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: RH(2),
    color: colors.white,
  },
  imageCountainer: {
    height: RH(21),
    width: RW(25),
    // backgroundColor: 'rgba(250, 250, 256, 0.10)',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    justifyContent: 'space-between',
    padding: RH(3),
  },
  imageCountainer1: {
    height: RH(21),
    width: RW(25),
    // backgroundColor: 'rgba(250, 250, 256, 0.10)',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'space-between',
    padding: RH(3),
  },
  textInput: {
    fontSize: RFS(2),
    alignSelf: 'center',
    color: colors.white,
  },
  images: {
    with: '90%',
    justifyContent: 'center',
    flexDirection: 'row',
    // gap: RH(5),
  },
  weightcontaint: {
    height: RH(6.4),
    width: RW(12),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacebetween: {
    height: RH(2.2),
    borderRadius: 30,
    width: RH(2),
    backgroundColor: 'white',
    position: 'absolute',
    left: RH(11.5),
    bottom: RH(9),
  },
  spacebetween1: {
    height: RH(4.2),
    // borderRadius: 30,
    width: RH(3.3),
    backgroundColor: 'transparent',
    position: 'absolute',
    left: RH(9.1),
    bottom: RH(8.0),
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: colors.white,
    fontSize: RFS(5),
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
  },
  maincontainer: {
    height: 193,
    width: 251,
    backgroundColor: 'rgba(250, 250, 256, 0.10)',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  ArrowImg: {
    height: 24,

    width: 24,
  },
});
