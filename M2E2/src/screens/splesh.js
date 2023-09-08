import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, ImageBackground, Text,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
// import bikeImage from '../constants/image'
const bikeImage = require('../assets/images/Bike98.png');
import { BackgroundImg,imgsplash } from '../constants/image';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={imgsplash}
        style={{height: '100%', width: '100%'}}>
        {/* <View style={{ flex:6,alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={bikeImage}
            resizeMode="contain"
            style={styles.imageBackground}
          />
        </View> */}
        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Your Text Here</Text> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  gradient: {
    flex: 1,
  },
  imageBackground: {

    width: 200,
 
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Splash;
