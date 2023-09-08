import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Background from '../component/LinearGradient/Background'
const  hockyman =require('../assets/images/HockyMan.png')
import {SIZES,colors} from '../component/theme/theme'
const Login = () => {
  return (
    <View>
      <Background imageSourse={hockyman}/>
  
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
