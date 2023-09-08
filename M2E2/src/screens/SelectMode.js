import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {
  Group1,
  Group2,
  Group3,
  Poker,
  Home1,
  Stock,
  Runner,
  Runner1,
  distance,
} from '../constants/image';
import {ImageSlider} from '../component/LinearGradient/ImageSlider';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {Icon, Notifaication, Wallet, Sky, RunIcon,BackgroundImg} from '../constants/image';
import {colors} from '../component/theme/theme';
import CustomCard from '../component/LinearGradient/Box';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyTabs from '../component/LinearGradient/BottomNavigation';
import CircularProgressBar from '../component/LinearGradient/CircularIndicater';
import {useNavigation} from '@react-navigation/native';
import Bottom from '../component/LinearGradient/Bottom';
import Sporting from './Sporting'

const SelectMode = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const handleRunning = () => {
    navigation.navigate('Shoes');
  };
  const handleWalking = () => {
    navigation.navigate('Sporting');
  };
    const hadlePlay = () => {
      navigation.navigate('StartPlay');
    };
  return (
    <>
      <View style={{flex: 1}}>
       <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
          <ScrollView>
            <Text style={styles.textItem}>Hi John</Text>
            <View>
              <View style={styles.card}>
                <Text style={[styles.textItem, {fontWeight: '700'}]}>
                  Let's Go For
                </Text>
                <View style={{rowGap: 25}}>
                  <TouchableOpacity onPress={hadlePlay}>
                    <CustomCard
                      imageSource={Group1}
                      text={'Running'}
                      height={112}
                      width={181}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleWalking}>
                    <CustomCard
                      imageSource={Group2}
                      text={'Walking'}
                      height={112}
                      width={181}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <CustomCard
                      imageSource={Group3}
                      text={'Cycling'}
                      height={112}
                      width={181}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          {/* <Bottom /> */}
          <Bottom />
        </ImageBackground>
      </View>
    </>
  );
};

export default SelectMode;

const styles = StyleSheet.create({
  card: {
    // flexDirection: 'row',
    alignSelf: 'center',
    gap: RH(2),
    // marginTop: RH(3),
    alignItems: 'center',
  },
  textItem: {
    color: '#fff',
    fontSize: 30,
    margin: RH(3),
    fontFamily: 'SairaSemiCondensed-Medium',
    fontWeight:'700'
  },
});
