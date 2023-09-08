import {StyleSheet, Text, View, StatusBar, Image,ImageBackground} from 'react-native';
import React from 'react';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Running from './Running';
import Cycling from './Cycling';
import Walking from './Walking';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';
import Custom from '../component/LinearGradient/CustomHero';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab=createMaterialTopTabNavigator();

import {Arrow1,BackgroundImg} from '../constants/image';
const Sporting = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={{paddingHorizontal:17}}>
          <View style={styles.header}>
            <Image
              source={Arrow1}
              resizeMode="contain"
              style={styles.ArrowImg}
            />
            <Text style={[styles.textHeading, {fontWeight: 700}]}>
              Sport Log
            </Text>
            <View style={{width: 20}}></View>
          </View>
          <View style={styles.container}>
            <View style={styles.containerBox}>
              <Text style={{color: '#fff', fontSize: 35, fontWeight: 700}}>
                7.02 <Text style={{fontSize: 10}}>km</Text>
              </Text>
              <Text style={{color: '#fff', fontSize: 16}}>Total Kms</Text>
            </View>
            <View style={styles.containerBox}>
              <Text style={{color: '#fff', fontSize: 35, fontWeight: 700}}>
                7.02 <Text style={{fontSize: 10}}>km</Text>
              </Text>
              <Text style={{color: '#fff', fontSize: 16}}>Total Kms</Text>
            </View>
          </View>
          <View style={styles.containerBox1}>
            <Text
              style={{
                color: '#fff',
                fontSize: 35,
                fontWeight: 700,
                alignSelf: 'center',
              }}>
              02.20<Text style={{fontSize: 10}}>Hour</Text>
            </Text>
            <Text style={{fontSize: 16, color: '#fff', alignSelf: 'center'}}>
              Total Time
            </Text>
          </View>
        </View>
        <View style={{height: 20}}></View>
        <Tab.Navigator
          initialRouteName="Running"
          screenOptions={{
            tabBarActiveTintColor: '#1EB808',
            tabBarInactiveTintColor: '#fff',
            tabBarLabelStyle: {fontSize: 20},
            tabBarIndicatorStyle: {backgroundColor: '#1EB808', height: 4},
            tabBarStyle: {backgroundColor: 'transparent'},
          }}>
          <Tab.Screen name="Running" component={Running} />
          <Tab.Screen name="Cycling" component={Cycling} />
          <Tab.Screen name="Walking" component={Walking} />
        </Tab.Navigator>
      </ImageBackground>
    </View>
  );
};

export default Sporting;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal:5
  },
  textHeading: {
    color: '#fff',
    fontSize: 22,
    // fontWeight:700,
  },
  container: {
    // flex: "30%",
    height: 190,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 20,
  },
  containerBox: {
    height: 144,
    width: 162,
    borderWidth: 2,
    backgroundColor: '#2B2F2F',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 20,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
  },
  containerBox1: {
    height: 96,
    width: 340,
    borderWidth: 2,
    backgroundColor: '#2B2F2F',
    alignSelf: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
  },
  ArrowImg: {
    height: 24,
    width: 24,
  },
});
