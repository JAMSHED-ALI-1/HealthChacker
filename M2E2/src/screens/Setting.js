import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Touchable,
  TouchableOpacity,ImageBackground,ScrollView
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Arrow1,
  SettingUser,
  UserIcon,
  LeftArrow,
  NotificationSharp,
} from '../constants/image';
import CustomTextInput from '../component/LinearGradient/TextInput';
import {Switch} from 'react-native-paper';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {act} from 'react-test-renderer';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import { BackgroundImg } from '../constants/image';


const Setting = () => {
  const navigation = useNavigation();
  const [active, setactive] = useState(false);
  const handleactive = () => {
    setactive(!active);
  };
  const [ismodalVisible, setmodalvisible] = useState(ismodalVisible);
  const showModal = () => {
    setmodalvisible(!ismodalVisible);
  };
  const hideModal = () => {
    setmodalvisible(!ismodalVisible);
  };
  const handleedit = () => {
    navigation.navigate('EditProfile');
  };
  const handleTerm = () => {
    navigation.navigate('TermCondition');
  };
  const handlePrivacy = () => {
    navigation.navigate('PrivacyPolicy');
  };
  const handlebackbtn = () => {
    navigation.navigate('PlayGame');
  };
  return (
  

     <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#091515'} />
        <ImageBackground
          source={BackgroundImg}
          style={{height: '100%', width: '100%'}}>
          <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlebackbtn}>
            <Image
              source={Arrow1}
              resizeMode="contain"
              style={{height: 24, width: 24}}
            />
          </TouchableOpacity>
          <Text style={[styles.textHeading, {fontWeight: 700}]}>Settings</Text>
          <View style={{width: 50}}></View>
        </View>
        <View style={styles.Circle}>
          <Image
            source={SettingUser}
            resizeMode="contain"
            style={styles.imgstyle}
          />
        </View>
        <View style={{height:40,width:40,backgroundColor:'red',alignSelf:'center',bottom:80,left:50}}>

        </View>
        <View style={styles.contaentBox}>
          <Text style={{color: '#fff', fontSize: 20}}>John</Text>
          <Text style={{color: '#fff', fontSize: 14}}>John@mobiloitte.com</Text>
          <Text style={{color: '#fff', fontSize: 10}}>
            hashId:{'  '} x205sde5...
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', marginTop: 20, gap: 5}}>
            <Image
              source={UserIcon}
              resizeMode="contain"
              style={{height: 17, width: 17}}
            />
            <Text style={{color: '#fff'}}>Account</Text>
          </View>
          <TouchableOpacity style={styles.textInput} onPress={handleedit}>
            <Text style={{color: '#fff'}}>Edit Account</Text>
            <Image
              source={LeftArrow}
              resizeMode="contain"
              style={{height: 13, width: 13}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.textInput}>
            <Text style={{color: '#fff'}}>Sport log</Text>
            <Image
              source={LeftArrow}
              resizeMode="contain"
              style={{height: 13, width: 13}}
            />
          </TouchableOpacity>

          <View style={{flexDirection: 'row', gap: 5}}>
            <Image
              source={NotificationSharp}
              resizeMode0="contain"
              style={{height: 19, width: 19}}
            />
            <Text style={{color: '#fff'}}>Notification</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text style={{color: '#fff', paddingHorizontal: 15}}>Sound</Text>

            {/* Switch Start  */}
            <View style={styles.activeCircle}>
              <TouchableOpacity onPress={handleactive}>
                <View
                  style={[
                    styles.active,
                    {backgroundColor: active ? '#1C5A6D' : '#CA76C1'},
                  ]}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleactive}>
                <View
                  style={[
                    styles.active,
                    {backgroundColor: active ? '#CA76C1' : '#1C5A6D'},
                  ]}></View>
              </TouchableOpacity>
            </View>
            {/* Switch End */}
          </View>
          {/* bottom Start */}
          <View style={{alignItems: 'center', marginVertical: 25, gap: 20}}>
            <TouchableOpacity
              style={styles.disconnctbtn}
              onPress={setmodalvisible}>
              <Text style={{color: '#fff', fontSize: 16}}>
                Disconnect Wallet
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', gap: 10}}>
              <TouchableOpacity onPress={handleTerm}>
                <Text style={styles.bottomText}>Terms & Condition</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePrivacy}>
                <Text style={[styles.bottomText]}>
                  Privacy policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal isVisible={ismodalVisible} backdropColor="black">
            <View style={{flex: 0}}>
              <View style={styles.Modal}>
                <Text style={styles.Hero2textheading}>Disconnect Wallet</Text>
                <Text
                  style={[
                    styles.buttonText,
                    {textAlign: 'center', padding: 10, fontWeight: 400},
                  ]}>
                  Are you sure you want to disconnect wallet?
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.modalbtn} onPress={hideModal}>
                    <Text style={styles.buttonText}>Cencel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalbtn} onPress={hideModal}>
                    <Text style={styles.buttonText}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    // marginTop: 20,
    padding: 15,
  },
  textHeading: {
    color: '#fff',
    fontSize: 22,
    // fontWeight:700,
  },
  Circle: {
    height: 160,
    width: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginVertical: 29,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },
  imgstyle: {
    height: 130,
    width: 131,
    alignSelf: 'center',
  },
  contaentBox: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 20,
  },
  textInput: {
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 40,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  activeCircle: {
    height: 25,
    width: 58,
    backgroundColor: '#1C5A6D',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  active: {
    height: 22,
    width: 25,
    backgroundColor: '#CA76C1',
    borderRadius: 30,
  },
  bottombtn: {},
  bottomText: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
  },
  disconnctbtn: {
    height: 36,
    width: 186,
    backgroundColor: '#D03B3B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalbtn: {
    height: 40,
    width: 125,
    borderWidth: 2,
    borderRadius: 20,
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
  Hero2textheading: {
    fontSize: 30,
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
