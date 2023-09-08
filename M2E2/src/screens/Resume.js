import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView
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
  Livelocation,
} from '../constants/image';
import {colors} from '../component/theme/theme';
import {useNavigation} from '@react-navigation/native';
import CountdownTimer from '../component/LinearGradient/Timer';

const Run = () => {
  const navigation = useNavigation();
  const handleStart = () => {
    navigation.navigate('Resume');
  };
  const handleResume = () => {
    navigation.navigate('ShereYourRun');
  };
  return (
    <View style={{}}>
      <StatusBar backgroundColor={'#093615'} />
      <LinearGradient
        colors={['#080E18', '#1EB808', '#080E19', '#080E16', '#080E18']}
        style={{height: '100%'}}
        start={{x: 0.5, y: 0.8}}
        end={{x: 9, y: -12}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.haeadertext}>
              <Image
                source={FootStep}
                resizeMode="contain"
                style={{height: 18, width: 18}}
              />
              <Text style={styles.text_1}>205</Text>
            </View>
            <Text style={[styles.text_1, {fontSize: 12, padding: 7}]}>
              Walking
            </Text>
            <View style={styles.HeaderBox}>
              <Image
                source={Timer}
                resizeMode="contain"
                style={styles.Timerimg}
              />
              <CountdownTimer/>
            </View>
            {/* hero start============== */}
            <View style={{alignItems: 'center'}}>
              <Image
                source={Livelocation}
                resizeMode="contain"
                style={styles.Hero_imag}
              />
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
            <View style={styles.Bottombox1}>
              {/* <View style={styles.box1Item}>
              <Image
                source={Image93}
                resizeMode="contain"
                style={{height: 40, width: 40}}
              />
            </View> */}
              <TouchableOpacity>
                <ImageBackground
                  source={Circle}
                  resizeMode="contain"
                  style={styles.startbtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                      fontWeight: 700,
                      bottom: 5,
                    }}>
                    Resume
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleResume}>
                <ImageBackground
                  source={Circle}
                  resizeMode="contain"
                  style={[styles.startbtn, {}]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                      fontWeight: 700,
                      bottom: 5,
                    }}>
                    STOP
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              {/* <View style={styles.box1Item}>
              <Image
                source={Image93}
                resizeMode="contain"
                style={{height: 40, width: 40}}
              />
            </View> */}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Run;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 316,
    width: 390,
    margin: 25,
  },
  box: {
    height: 72,
    width: RH(15),
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  boxText: {
    color: '#fff',
    fontSize: 30,
  },
  mainBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap:5
  },
  Bottombox1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    alignItems: 'center',
  },
  box1Item: {
    height: 70,
    width: 70,
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
});
