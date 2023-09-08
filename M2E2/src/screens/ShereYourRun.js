import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,ScrollView
} from 'react-native';
import React from 'react';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {
  FootStep,
  Timer,
  Hero1,
  Image93,
  Circle,
  Location,
  BackgroundImg
} from '../constants/image';
import {colors} from '../component/theme/theme';
import {useNavigation} from '@react-navigation/native';
import Button1 from '../component/LinearGradient/Button';


const ShereYourRun = () => {
  const navigation = useNavigation();
  const handleStart = () => {
    navigation.navigate('Resume');
  };
  const handlehome=()=>{
    navigation.navigate('Home')
  }
  return (
    <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.container}>
          <ScrollView disableScrollViewPanResponder={true}>
            {/* hero start============== */}

            <View style={{alignItems: 'center'}}>
              <Image
                source={Hero1}
                resizeMode="contain"
                style={styles.Hero_imag}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.haeadertext}>
                <Image
                  source={FootStep}
                  resizeMode="contain"
                  style={{height: 28, width: 28}}
                />
                <Text style={[styles.text_1, {fontSize: 30}]}>
                  205<Text style={{fontSize: 12}}> Step</Text>
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 12, color: '#fff'}}>
                  time <Text style={{fontSize: 30}}>00:09</Text>
                </Text>
              </View>
            </View>

            {/* bottom box start0    */}
            <View style={styles.mainBox}>
              <View style={styles.box}>
                <Text style={[styles.boxText, {color: '#01FBB4'}]}>13</Text>
                <Text style={[styles.boxText, {fontSize: 12}]}>Meters</Text>
              </View>
              <View style={styles.box}>
                <Text style={[styles.boxText, {color: '#fff'}]}>0.00</Text>
                <Text style={[styles.boxText, {fontSize: 12}]}>Km/h</Text>
              </View>
              <View style={styles.box}>
                <Text style={[styles.boxText, {color: '#E838D6'}]}>0.00</Text>
                <Text style={[styles.boxText, {fontSize: 12}]}>Earned SET</Text>
              </View>
            </View>
            {/* bootttom start */}

            <View style={{marginVertical: 30}}>
              <TouchableOpacity style={styles.loginbtn}>
                <Text style={{color: '#fff', fontSize: 20}}>
                  SHARE YOUR RUN
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={handlehome}>
              <Text style={{fontSize: 16, color: '#fff'}}>Back To Home</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ShereYourRun;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageHeader: {
    height: 18,
    width: 18,
  },
  haeadertext: {
    color: '#fff',
    flexDirection: 'row',
    columnGap: 13,
  },
  text_1: {
    color: '#fff',
    fontSize: 16,
  },
  Timerimg: {
    height: 26,
    width: 26,
  },
  imagetext: {
    fontSize: 40,
    color: '#fff',
  },
  HeaderBox: {
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    columnGap: 10,
  },
  Hero_imag: {
    height: 416,
    width: 352,
  },
  box: {
    height: 72,
    width: RW(27),
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  boxText: {
    color: '#fff',
    fontSize: 30,
  },
  mainBox: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    //  alignSelf:'center'
  },
  Bottombox1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    alignItems: 'center',
  },
  box1Item: {
    height: 70,
    // width: 70,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startbtn: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginbtn: {
    height: 59,
    width: 320,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
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
    shadowRadius: 4,
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
  },
});
