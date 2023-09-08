import {StyleSheet, Text, View, StatusBar, ImageBackground} from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {Flesh} from '../constants/image';
import { useNavigation } from '@react-navigation/native';

const StartGame = () => {
    const navigation=useNavigation()
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Run');
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#093615'} />

      <LinearGradient
        colors={['#080E18', '#1EB808', '#080E19', '#080E16', '#080E18']}
        style={{height: '100%', width: '100%'}}
        start={{x: 0, y: 0.8}}
        end={{x: 23, y: -10}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ImageBackground
            source={Flesh}
            resizeMode="contain"
            style={{height: 260, width: 260}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 150, color: 'white'}}>1</Text>
            </View>
          </ImageBackground>
        </View>
      </LinearGradient>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({});
