import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Touchable,
  TouchableOpacity,ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Arrow1,
  SettingUser,
  UserIcon,
  LeftArrow,
  NotificationSharp,
  BackgroundImg
} from '../constants/image';
import { useNavigation } from '@react-navigation/native';
const PrivacyPolicy = () => {
  const navigation=useNavigation();
  const handleBack=()=>{
    navigation.navigate('Setting')
  }
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={Arrow1}
              resizeMode="contain"
              style={{height: 24, width: 24}}
            />
          </TouchableOpacity>
          <Text style={[styles.textHeading, {fontWeight: 700}]}>
            Privacy Policy
          </Text>
          <View style={{width: 50}}></View>
        </View>
        <View style={styles.Circle}></View>
        <View style={{flex: 1, padding: 15}}>
          <Text style={{color: '#fff'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            facilisis risus odio id amet leo. Justo, tortor purus varius non ut
            ullamcorper donec fringilla in. Imperdiet posuere dolor in tempor
            amet est. Sed nunc metus, nisi, sit cursus sagittis nisi,
            condimentum fringilla. Dictum ut nunc, rhoncus quis ornare eget
            facilisis facilisi pellentesque. Amet, aliquet orci, ut faucibus. In
            viverra amet quisque sit. Vulputate sapien sed purus dui viverra.
            Imperdiet ut adipiscing et, lorem amet suspendisse mi. Id consequat
            aliquam aliquam, ultricies mi in lectus porttitor enim. Ac ornare
            morbi ut ut et risus eleifend rhoncus. In neque ornare non habitant
            eget sem. Duis leo consectetur urna, gravida. Scelerisque et
            faucibus id proin. Ridiculus varius sit a id. Egestas nisi sapien
            lorem rutrum nullam sed. Ultricies a integer nulla placerat
            convallis ultricies sit. Amet dolor lorem vitae massa. Sagittis
            donec elementum sit convallis aliquet dolor, nam nunc. Massa gravida
            ornare vestibulum et proin habitant ut. Nibh magna etiam metus, vel,
            facilisi auctor. Lacinia nec, tellus augue vitae purus. Aliquam eget
            semper pharetra tortor. Consequat pharetra porttitor amet
            ullamcorper risus, a
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PrivacyPolicy;

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
});
