import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Touchable,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import {SIZES, colors} from '../component/theme/theme';
import {CustomTextInput} from '../component/LinearGradient/TextInput';
import btn from '../constants/image';
import {Boy, BackgroundImg, Step1} from '../constants/image';
import {Arrow,Arrow1,} from '../constants/image';
import Button1 from '../component/LinearGradient/Button';
import {Girl} from '../constants/image';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Stepper from 'react-native-stepper-ui';
import Stepper1 from '../component/LinearGradient/Stepper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomStepIndicator from '../component/LinearGradient/CustomStepper';

const SelectGender = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [step, setStep] = useState(0);
  const [Selectimage, SetSelectimage] = useState(0);
  const navigation = useNavigation();
  const HandleBack = () => {
    navigation.navigate('CreateNewPass');
  };
  const hanleSubmit = () => {
    navigation.navigate('WeightOfUser');
  };
  const handleNext = () => {
    setStep(prevState => prevState + 1);
    if (step === 0) {
      navigation.navigate('WeightOfUser');
    }
  };
 const handleNextStep=()=>{
navigation.navigate('WeightOfUser');
 }
  const handlePreviousStep = () => {
    navigation.goBack();
  };
  return (
    <View style={{height: '100%'}}>
      <KeyboardAvoidingView>
        <StatusBar backgroundColor={'#091515'} />
        <ImageBackground
          source={BackgroundImg}
          style={{height: '100%', width: '100%'}}>
          <View style={styles.conatiner}>
            <View style={styles.header}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={HandleBack}>
                  <Image
                    source={Arrow}
                    resizeMode="contain"
                    style={styles.ArrowImg}
                  />
                </TouchableOpacity>
                {/* <View style={{}}>
                  <Image
                    source={Step1}
                    // resizeMode="contain"
                    style={{width:360}}
                  /> */}
                {/* </View> */}
                {/* <Stepper1 page={1} /> */}
                <CustomStepIndicator />
                {/* <Stepper active={2} size={3} /> */}
                <View style={{alignItems: 'center'}}>
                  <View style={{marginTop: 20}}>
                    <Text
                      style={[
                        styles.TextItem1,
                        {fontWeight: 700, marginTop: 40},
                      ]}>
                      What’s your gender?
                    </Text>
                  </View>
                  <Text style={[styles.text, {fontWeight: 400}]}>
                    Calories & stride length calculation need it
                  </Text>
                </View>
                <View style={styles.images}>
                  <View
                    style={
                      Selectimage == 0
                        ? styles.imageCountainer1
                        : styles.imageCountainer
                    }>
                    <TouchableOpacity onPress={() => SetSelectimage(0)}>
                      <Image source={Boy} />
                    </TouchableOpacity>
                    <Text
                      style={{color: colors.white, fontFamily: 'Sen-Medium'}}>
                      Male
                    </Text>
                  </View>
                  <View
                    style={
                      Selectimage == 1
                        ? styles.imageCountainer1
                        : styles.imageCountainer
                    }>
                    <TouchableOpacity onPress={() => SetSelectimage(1)}>
                      <Image source={Girl} />
                    </TouchableOpacity>
                    <Text
                      style={{color: colors.white, fontFamily: 'Sen-Medium'}}>
                      Female
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginVertical: RH(14),
                  }}>
                  <Button1 text={'Next'} onPress={hanleSubmit} />
                </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </View>
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
    height: 181,
    width: 133,
    backgroundColor: 'rgba(250, 250, 255, 0.10)',
    alignItems: 'center',
    borderRadius: 10,
  },
  imageCountainer1: {
    height: 181,
    width: 133,
    backgroundColor: 'rgba(250, 240, 255, 0.20)',
    alignItems: 'center',
    borderRadius: 10,
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
    gap: RH(5),
    marginTop: 20,
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
  TextItem1: {
    fontSize: 30,
    color: colors.white,

    fontFamily: 'SairaSemiCondensed-Medium',
  },
  conatiner: {
    flex: 1,
    padding: 10,
  },
  ArrowImg: {
    height: 24,
    width: 24,
  },
});
