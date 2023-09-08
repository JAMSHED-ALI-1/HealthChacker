import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,ImageBackground
} from 'react-native';
import {
  image1,
  Ellipse,
  line1,
  line2,
  image2,
  image3,
  image4,
  image5,
  cloud,
  image6,
  Poker,
  BackgroundImg,
  Line,
} from '../constants/image';
import Cycle from './Cycle';
import Shoes1 from '../../Shoes1';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
const Shoes = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <View>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.head}>
          <TouchableOpacity>
            <Image
              source={Ellipse}
              resizeMode="contain"
              style={{height: 60, width: 60}}
            />
          </TouchableOpacity>
          <View>
            <View style={{flexDirection: 'row', gap: 10, margin: 4}}>
              <Image source={cloud} />
              <Text style={{color: '#fff'}}>30/100</Text>
            </View>
            <View style={styles.header}>
              <Image
                source={Line}
                resizeMethod=""
                style={{width: 48, height: 4}}
              />
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', gap: 10, margin: 4}}>
              <View style={styles.Pockerstyle}>
                <Image source={Poker} />
              </View>
              <Text style={{color: '#fff'}}>30/100</Text>
            </View>
            <View style={styles.header}>
              <Image
                source={Line}
                resizeMethod=""
                style={{width: 48, height: 4}}
              />
            </View>
          </View>
        </View>
        <View style={styles.lines12}></View>

        <Tab.Navigator
          initialRouteName="Shoes1"
          screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarLabelStyle: {fontSize: 12},
            tabBarStyle: {backgroundColor: 'transparent'},
            tabBarIndicatorStyle: {
              backgroundColor: '#D8FFEC',
              width: 135,
              justifyContent: 'center',
              marginHorizontal: 30,
            },
          }}>
          <Tab.Screen
            name="Shoes1"
            component={Shoes1}
            options={{tabBarLabel: 'Shoes'}}
          />
          <Tab.Screen
            name="Cycle"
            component={Cycle}
            options={{tabBarLabel: 'Cycle'}}
          />
        </Tab.Navigator>
      </ImageBackground>
    </View>
  );
};

export default Shoes;

const styles = StyleSheet.create({
  header: {
    height: 6,
    width:109,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: '#8EC6A9',
    borderWidth: 1,
  },
  line: {
    height:3,
    width: 48,
    backgroundColor: 'pink',
    borderRadius: 5,
  },
  lines12: {
    height: RH(0.2),
    width: RW(88),
    backgroundColor: '#265335',
    alignSelf: 'center',
    marginVertical: RH(1.5),
  },
  Pockerstyle:{
    height:20,
    width:20,
    backgroundColor:'#fff',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  head:{flexDirection: 'row',
   marginTop: RH(2),
   paddingHorizontal:24,
   justifyContent:'space-between',
   alignItems:'center'
  }
});
