import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Touchable,
  TouchableOpacity,ScrollView, KeyboardAvoidingView,ImageBackground
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Arrow1,
  SettingUser,
  UserIcon,
  LeftArrow,
  NotificationSharp,BackgroundImg
} from '../constants/image';
import CustomTextInput from '../component/LinearGradient/TextInput';
import {Switch, TextInput} from 'react-native-paper';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {act} from 'react-test-renderer';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';


const EditProfile = () => {
  const [seletGender, setselectorGender] = useState(false);
  const handleGendr = () => {
    setselectorGender(!seletGender);
    const navigation=useNavigation();
    const handleBack1=()=>{
      navigation.navigate('Setting')
    }
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.header}>
          <TouchableOpacity>

          <Image
            source={Arrow1}
            resizeMode="contain"
            style={{height: 24, width: 24}}
          />
          </TouchableOpacity>
          <Text style={[styles.textHeading, {fontWeight: 700}]}>Settings</Text>
          <TouchableOpacity>
            <LinearGradient
              colors={['#CA76C1', '#77CFCF', '#B8FFAE']}
              style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <KeyboardAvoidingView>
            <View style={{flex: 1}}>
              <View style={styles.container}>
                <View style={styles.imgstyle}>
                  <Image
                    source={SettingUser}
                    resizeMode="contain"
                    style={styles.user}
                  />
                </View>
                <View style={{marginTop: 25, gap: 15}}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    mode="outlined"
                    placeholderTextColor={'#A3A3A3'}
                    activeOutlineColor="rgba(255, 255, 255, 0.20)"
                    outlineStyle={{borderRadius: 20, height: 60}}
                  />

                  <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    placeholderTextColor={'#A3A3A3'}
                    mode="outlined"
                    activeOutlineColor="rgba(255, 255, 255, 0.20)"
                    outlineStyle={{borderRadius: 20, height: 60}}
                  />

                  <TextInput
                    style={styles.textInput}
                    placeholder="Bio"
                    mode="outlined"
                    placeholderTextColor={'#A3A3A3'}
                    activeOutlineColor="rgba(255, 255, 255, 0.20)"
                    outlineStyle={{borderRadius: 20, height: 75}}
                  />
                </View>
                <View
                  style={{flexDirection: 'row', columnGap: 10, marginTop: 20}}>
                  <TouchableOpacity onPress={handleGendr}>
                    <LinearGradient
                      colors={[
                        seletGender ? 'transparent' : '#CA76C1',
                        seletGender ? 'transparent' : '#77CFCF',
                        seletGender ? 'transparent' : '#B8FFAE',
                      ]}
                      style={[
                        styles.button,
                        {
                          borderWidth: 2,
                          borderBottomColor: '#8DC388',
                          borderTopColor: '#8DC388',
                          borderLeftColor: '#9CA6C9',
                          borderRightColor: '#9CA6C9',
                          borderRadius: 50,
                        },
                      ]}>
                      <Text style={styles.buttonText}>Male</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleGendr}>
                    <LinearGradient
                      colors={[
                        seletGender ? '#CA76C1' : 'transparent',
                        seletGender ? '#77CFCF' : 'transparent',
                        seletGender ? '#B8FFAE' : 'transparent',
                      ]}
                      style={[
                        styles.button,
                        {
                          borderWidth: 2,
                          borderBottomColor: '#8DC388',
                          borderTopColor: '#8DC388',
                          borderLeftColor: '#9CA6C9',
                          borderRightColor: '#9CA6C9',
                          borderRadius: 50,
                        },
                      ]}>
                      <Text style={styles.buttonText}>Female</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 25, gap: 15}}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    placeholderTextColor={'#A3A3A3'}
                    mode="outlined"
                    activeOutlineColor="rgba(255, 255, 255, 0.20)"
                    outlineStyle={{borderRadius: 20, height: 60}}
                  />
                  <TouchableOpacity style={styles.textInput1}>
                    <Text style={{color: '#A3A3A3'}}>Weight</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                      <Text style={{color: '#A3A3A3'}}>65.5 KG</Text>
                      <Image
                        source={LeftArrow}
                        resizeMode="contain"
                        style={{height: 13, width: 13}}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.textInput1}>
                    <Text style={{color: '#A3A3A3'}}>Height</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                      <Text style={{color: '#A3A3A3'}}>65.5 CM</Text>
                      <Image
                        source={LeftArrow}
                        resizeMode="contain"
                        style={{height: 13, width: 13}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    // marginTop: 20,
    paddingHorizontal: 15,
  },
  textHeading: {
    color: '#fff',
    fontSize: 22,
    // fontWeight:700,
  },
  button: {
    height: 40,
    marginTop: 10,
    width: 90,
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 20,
  },
  imgstyle: {
    height: 88,
    width: 88,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderWidth: 2,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    height: 72,
    width: 72,
  },
  textInput: {
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 15,
    justifyContent: 'center',
  },
  inputText: {color: '#A3A3A3', fontSize: 16, paddingHorizontal: 20},
  textInput1: {
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 15,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
