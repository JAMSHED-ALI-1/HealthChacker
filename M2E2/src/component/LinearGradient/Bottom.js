import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight as RH,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {Home1, Runner, Runner1, Stock} from '../../constants/image';
import {useNavigation} from '@react-navigation/native';

const Bottom = ({onPressHome, onPressRunner, onPressStock}) => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Home');
  };
  const hadlePlay = () => {
    navigation.navigate('SelectMode');
  };
  const handleshoees = () => {
    navigation.navigate('Shoes');
  };
  return (
    <LinearGradient
      colors={['#495463', 'rgba(7, 8, 10, 0.00)', 'rgba(73, 84, 99, 0.37)']}
      style={styles.gradient}
      start={{x: 0.4, y: 0}}
      end={{x: 0.2, y: 4}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleHome}>
          <Image source={Home1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={hadlePlay}>
          <ImageBackground
            source={Runner}
            resizeMode="contain"
            style={styles.runnerBackground}>
            <Image
              source={Runner1}
              resizeMode="contain"
              style={styles.runnerImage}
            />
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleshoees}>
          <Image source={Stock} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: RW(4),
    alignSelf: 'center',
    // width: '99%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RW(6),
  },
  container: {
    flex: 1,
    height: RH(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  runnerBackground: {
    height: 35,
    width: 50,
    // zIndex:-1
  },
  runnerImage: {
    zIndex: -1,
    height: 50,
    // alignSelf:"center",
    position: 'absolute',
    padding: 20,
    top: -7,
  },
});

export default Bottom;
