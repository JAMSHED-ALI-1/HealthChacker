import Modal from 'react-native-modal';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  ScrollViewComponent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Arrow, HeadPhones} from '../constants/image';
import {Dimensions} from 'react-native';
import {
  RactAngle1,
  RactAngle2,
  RactAngle3,
  RactAngle4,
  RactAngle5,
  btn1,
  BackgroundImg,
} from '../constants/image';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const ShoesDetail = () => {
  const navigation=useNavigation();
  const [ismodalVisible, setmodalvisible] = useState(ismodalVisible);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const showModal = () => {
    setmodalvisible(!ismodalVisible);
  };
  const hideModal = () => {
    setmodalvisible(!ismodalVisible);
  };
  const handleUseNow=()=>{
    navigation.navigate('Sporting')
  }
  return (
    <View>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <TouchableOpacity>
          <Image source={Arrow} resizeMode="contain" style={styles.styleImg} />
        </TouchableOpacity>
        <ScrollView>
          <View>
            <Image
              source={HeadPhones}
              resizeMode="contain"
              style={{height: RH(32), width: 400, alignSelf: 'center'}}
            />
          </View>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.textcolor}>SHOES-1</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <TouchableOpacity style={styles.mainbtn} onPress={handleUseNow}>
                  <Text style={{color: '#fff'}}>USE NOW</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.mainbtn, {padding: 5}]}
                  onPress={hideModal}>
                  <Text style={{color: '#fff'}}>RENTNOW</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container1}>
              <View style={{width: '60%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
                  }}>
                  <View
                    style={[
                      styles.containerbtn2,
                      {backgroundColor: '#EF5DA8', marginHorizontal: RW(4)},
                    ]}>
                    <Text style={{textAlign: 'center'}}>RANK-A</Text>
                  </View>
                  <View style={styles.containerbtn2}>
                    <Text style={{textAlign: 'center'}}>RANK-A</Text>
                  </View>
                  <View style={styles.containerbtn}>
                    <View
                      style={{
                        height: 30,
                        width: 70,
                        backgroundColor: '#3BD0C7',
                        borderRadius: 30,
                        justifyContent: 'center',
                      }}>
                      <Text style={{textAlign: 'center', color: '#fff'}}>
                        87/10
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.textItem}>
                <Text style={{color: '#fff'}}>LEVEL</Text>
                <Text style={{color: '#fff'}}>9730</Text>
              </View>
              <View style={styles.stepper}>
                <View style={styles.internalStepper}></View>
              </View>
            </View>
            <View style={styles.container2}>
              <View style={{width: '92%', alignSelf: 'center'}}>
                <Text
                  style={{
                    color: '#fff',
                    marginVertical: 8,
                    fontSize: 16,
                    fontWeight: 900,
                  }}>
                  Attributes
                </Text>
                <View></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={RactAngle1}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{color: '#fff'}}>Strength</Text>
                  <View
                    style={[styles.stepperline, {backgroundColor: '#484747'}]}>
                    <View
                      style={[
                        styles.stepperbox,
                        {backgroundColor: '#DAA49C'},
                      ]}></View>
                  </View>
                  <Text style={{color: '#fff'}}>15.3</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 20,
                  }}>
                  <Image
                    source={RactAngle2}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{color: '#fff'}}>Luck{'    '}</Text>
                  <View
                    style={[styles.stepperline, {backgroundColor: '#484747'}]}>
                    <View
                      style={[
                        styles.stepperbox,
                        {backgroundColor: '#23D0E8'},
                      ]}></View>
                  </View>
                  <Text style={{color: '#fff'}}>15.3</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={RactAngle3}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{color: '#fff'}}>Enduring</Text>
                  <View
                    style={[styles.stepperline, {backgroundColor: '#484747'}]}>
                    <View
                      style={[
                        styles.stepperbox,
                        {backgroundColor: '#A787EC'},
                      ]}></View>
                  </View>
                  <Text style={{color: '#fff'}}>15.3</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 20,
                  }}>
                  <Image
                    source={RactAngle4}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{color: '#fff'}}>Beauty{'  '}</Text>
                  <View
                    style={[styles.stepperline, {backgroundColor: '#484747'}]}>
                    <View
                      style={[
                        styles.stepperbox,
                        {backgroundColor: '#DAA49C'},
                      ]}></View>
                  </View>
                  <Text style={{color: '#fff'}}>15.3</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={RactAngle5}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{color: '#fff'}}>Comfort</Text>
                  <View
                    style={[styles.stepperline, {backgroundColor: '#484747'}]}>
                    <View style={styles.stepperbox}></View>
                  </View>
                  <Text style={{color: '#fff'}}>15.3</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <Modal isVisible={ismodalVisible}>
          <View style={{}}>
            <View style={{backgroundColor: 'transparent'}}>
              <View style={styles.modal1}>
                <Text style={{color: '#fff', fontSize: 30}}>Notice</Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    color: '#fff',
                    padding: RH(3),
                  }}>
                  You cannot rent until you have 10000 NFTs
                </Text>
                <ImageBackground source={btn1}>
                  <TouchableOpacity
                    onPress={showModal}
                    style={{
                      height: 45,
                      width: 85,
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginTop: 5,
                        color: '#fff',
                      }}>
                      OK
                    </Text>

                    {/* Content of TouchableOpacity */}
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

export default ShoesDetail;

const styles = StyleSheet.create({
  mainbtn: {
    height: RH(5),
    width: RH(12),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: RH(2.5),
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
  },
  styleImg: {height: RH(3), width: RW(8), margin: 10},
  textcolor: {
    color: '#fff',
    marginTop: 6,
  },
  container1: {
    height: 130,
    width: RW(90),
    backgroundColor: ' rgba(255, 255, 255, 0.12) ',
    borderWidth: 2,
    borderRadius: RH(1.5),
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    marginVertical: RH(2),
  },
  containerbtn: {
    height: 30,
    width: 84,
    backgroundColor: '#72846F',
    // margin: 15,
    marginHorizontal: RW(5),
    justifyContent: 'space-between',
    marginVertical: RH(2),
    borderRadius: 30,
  },

  containerbtn2: {
    height: 30,
    width: 84,
    backgroundColor: '#7879F1',
    marginVertical: RH(2),
    justifyContent: 'center',
    borderRadius: 30,
  },
  textItem: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  stepper: {
    height: RH(1.5),
    width: '90%',
    backgroundColor: '#fff',
    marginVertical: RH(2),
    alignSelf: 'center',
    borderRadius: 20,
  },
  internalStepper: {
    height: RH(1.5),
    width: '40%',
    backgroundColor: '#C5E224',
    borderRadius: 20,
  },
  container2: {
    height: RH(34),
    width: RW(90),
    backgroundColor: ' rgba(255, 255, 255, 0.12) ',
    borderWidth: 2,
    borderRadius: RH(1.5),
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
  },
  stepperbox: {
    height: RH(1.3),
    width: RW(29),
    marginHorizontal: 1,
    backgroundColor: '#E86A23',
    borderRadius: 20,
  },
  stepperline: {
    height: RH(1.5),
    width: RW(50),
    backgroundColor: '#484747',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 4,
  },
  modal1: {
    width: 300,
    height: 180,

    borderRadius: 10,
    alignItems: 'center',
    // justifyContent:'center',
    // marginHorizontal: RW(6),
    alignSelf: 'center',
    backgroundColor: ' rgba(20, 19, 19, 0.50) ',
    borderWidth: 2,
    borderRadius: RH(1.5),
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
  },
});
