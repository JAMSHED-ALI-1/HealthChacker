import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import React, {useState} from 'react';
import {
  Arrow1,
  Line,
  Ellipse,
  cloud,
  Hero1,
  FootStep,
  Run,
  Image93,
  Circle,
  Poker,
  Location,
  BackgroundImg,
} from '../constants/image';
import Button1 from '../component/LinearGradient/Button';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import StartGame from './Play';
const StartPlay = () => {
  const [ismodalVisible, setmodalvisible] = useState(ismodalVisible);
  const navigation = useNavigation();
  const handlePressme = () => {
    navigation.navigate('StartGame');
  };
  const handleCancel = () => {
    setmodalvisible(!ismodalVisible);
  };
  const handlemodal = () => {
    setmodalvisible(!ismodalVisible);
  };
  const handleBack = () => {
    navigation.navigate('StartPlay');
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: RH(1),
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={handleBack}>
              <Image
                source={Arrow1}
                resizeMode="contain"
                style={styles.ArrowImg}
              />
            </TouchableOpacity>
            <View>
              <View style={{flexDirection: 'row', margin: 5}}>
                <Image source={cloud} />
                <Text style={{color: '#fff', marginHorizontal: 5}}>30/100</Text>
              </View>
              <View style={styles.header}>
                <Image
                  source={Line}
                  resizeMethod=""
                  style={{width: 48, height: 5.5}}
                />
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', margin: 5}}>
                <View style={styles.Pockerstyle}>
                  <Image source={Poker} />
                </View>
                <Text style={{color: '#fff', marginHorizontal: 5}}>30/100</Text>
              </View>
              <View style={styles.header}>
                <Image
                  source={Line}
                  resizeMethod=""
                  style={{width: 48, height: 5.5}}
                />
              </View>
            </View>
            <TouchableOpacity>
              <Image
                source={Ellipse}
                resizeMode="contain"
                style={{height: RH(7), width: RW(15)}}
              />
            </TouchableOpacity>
          </View>
          {/* box1-----------------------start------------------------------------------------ */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.itembox1}>
              <View style={styles.itemBox}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 700}}>
                  JOHN
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '#fff', margin: 4}}>Weight</Text>
                  <View style={[styles.btnBox, {backgroundColor: '#3BD0C7'}]}>
                    <Text style={styles.text}>65.5 CM</Text>
                  </View>
                </View>

                <Text style={{color: '#fff', marginTop: 8}}>Male</Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '#fff', margin: 4}}>Height</Text>
                  <View style={styles.btnBox}>
                    <Text style={styles.text}>65.5 CM</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* hero1start-------------------------------------------------- */}

            <ImageBackground
              source={Hero1}
              resizeMode="contain"
              style={{height: 377}}
            />
            {/* hero2 ---------------------------------- */}
            {/* <View style={styles.hero2}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.Hero2textheading}>0.00</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={FootStep}
                  resizeMode="contain"
                  style={{height: 16, width: 16, marginHorizontal: 4}}
                />
                <Text style={{color: '#fff'}}>Total Steps</Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.Hero2textheading}>0.00</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Run}
                  resizeMode="contain"
                  style={{height: 16, width: 16, marginHorizontal: 4}}
                />
                <Text style={{color: '#fff'}}>Total Kilometer</Text>
              </View>
            </View>
          </View> */}
            {/* footer start =================== */}
            <View style={styles.Bottombox1}>
                <TouchableOpacity>
              <View style={styles.box1Item}>

                <Image
                  source={Image93}
                  resizeMode="contain"
                  style={{height: 40, width: 40}}
                />
              </View>
                </TouchableOpacity>
              <TouchableOpacity onPress={handlemodal}>
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
                    Start
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{width: 50}}></View>
            </View>
            {/* modal start  */}
            <Modal isVisible={ismodalVisible}>
              <View style={{flex: 0}}>
                <View style={styles.Modal}>
                  <Text style={styles.Hero2textheading}>Notice</Text>
                  <Text
                    style={[
                      styles.buttonText,
                      {textAlign: 'center', padding: 10, fontWeight: 400},
                    ]}>
                    You cannot start without holding shoes on cycle.
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={handlePressme}>
                      <LinearGradient
                        colors={['#CA76C1', '#77CFCF', '#B8FFAE']}
                        style={styles.button}>
                        <Text style={styles.buttonText}>PressMe</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.modalbtn}
                      onPress={handleCancel}>
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartPlay;

const styles = StyleSheet.create({
  header: {
    height: RH(1),
    width: RW(25),
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: '#8EC6A9',
    borderWidth: 1,
  },
  line: {
    height: RH(0.7),
    width: RW(14),
    backgroundColor: 'pink',
    borderRadius: 5,
  },
  lines12: {
    height: RH(0.2),
    width: RW(90),
    backgroundColor: '#265335',
    alignSelf: 'center',
    marginVertical: RH(1.5),
  },
  text: {alignSelf: 'center', alignItems: 'center', color: '#fff'},
  btnBox: {
    height: 36,
    width: 77,
    backgroundColor: '#964BBA',
    borderRadius: 20,
    justifyContent: 'center',
  },
  itemBox: {
    height: 41,
    width: 214,
    backgroundColor: '#3587C1',
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itembox1: {
    height: 127,
    backgroundColor: '  ',
    marginVertical: 15,
    paddingVertical: 15,
  },
  Hero2textheading: {
    fontSize: 30,
    color: '#fff',
  },
  hero2: {
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
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
  button: {
    height: 40,
    marginTop: 10,
    width: 125,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalbtn: {
    height: 40,
    width: 125,
    borderWidth: 2,
    borderRadius: RH(1),
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Modal: {
    height: 205,
    width: 341,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
  },
  ArrowImg: {
    height: 24,
    width: 24,
  },
  Pockerstyle: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
