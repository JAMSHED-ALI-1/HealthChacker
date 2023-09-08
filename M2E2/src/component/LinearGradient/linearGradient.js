import React from 'react';
import {View, StyleSheet, StatusBar, ImageBackground, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 import bikeImage from'../../constants/image';
// const bikeImage=require('../../assets/images/Bike98.png')

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#081016'} />
      <LinearGradient
        style={styles.gradient}
        colors={['#01010d', '#02a102', '#010212', '#010212']}
        start={{x: -1, y: 6.4}}
        end={{x: 9.2, y: 0.1}}>
        <ImageBackground source={bikeImage}  resizeMode="contain" style={styles.imageBackground}>
          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Your Text Here</Text> */}
          </View>
        </ImageBackground>
      </LinearGradient>
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
    flex: 1,
    resizeMode: 'scale',
    width:200,
   alignSelf:"center"
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

  export default {Splash};




