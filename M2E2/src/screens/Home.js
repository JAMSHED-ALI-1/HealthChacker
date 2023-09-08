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
import React, {useState} from 'react';
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
import Modal from 'react-native-modal';
import ImageSlider from '../component/LinearGradient/ImagesSlider';

// import CircularProgressBar from '../component/LinearGradient/CircularIndicater';

const Home = () => {
  const [ismodalVisible, setmodalvisible] = useState(ismodalVisible);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const images = [Sky, Sky, Sky,Sky];
  const navigation = useNavigation();
  const handleRunner = () => {
    navigation.navigate('SelectMode');
  };
  const handleNotification = () => {
    navigation.navigate('Notification');
  };
  const showModal = () => {
    setmodalvisible(!ismodalVisible);
  };
  const hideModal = () => {
    setmodalvisible(!ismodalVisible);
  };
  const handlesetting = () => {
    navigation.navigate('Setting');
  };
  const hadlePlay=()=>{
     navigation.navigate('StartPlay');
  }

  return (
    <>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#091515'} />
        <ImageBackground
          source={BackgroundImg}
          style={{height: '100%', width: '100%'}}>
          <ScrollView>
            <View style={{paddingHorizontal:20}}>
              <View style={styles.main}>
                <View>
                  <Text style={styles.HeadText}>x205sd58erde5...</Text>
                  <Text style={styles.HeadText}>Let’s Move2Earn</Text>
                </View>
                <View style={styles.headImage}>
                  <TouchableOpacity onPress={hideModal}>
                    <Image source={Wallet} style={styles.img} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleNotification}>
                    <Image source={Notifaication} style={styles.img} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handlesetting}>
                    <Image source={Icon} />
                  </TouchableOpacity>
                </View>
              </View>
            
              <ImageSlider images={images} /> 
          

              {/* <View style={{flexDirection: 'row',gap:5,alignSelf:'center'}}>
          <View style={styles.circle}></View>
          <View style={styles.circle1}></View>
          <View style={styles.circle1}></View>
          <View style={styles.circle1}></View>

        </View> */}
              <View style={{}}>
                <View style={styles.card}>
                  <TouchableOpacity>
                    <CustomCard
                      imageSource={Group1}
                      text={'Running'}
                      height={102}
                      width={98}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <CustomCard
                      imageSource={Group2}
                      text={'Walking'}
                      height={102}
                      width={98}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <CustomCard
                      imageSource={Group3}
                      text={'Cycling'}
                      height={102}
                      width={98}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.TotalEarning}>
                  <View style={styles.Earning}>
                    <View style={styles.card1}>
                      <Image source={Poker} />
                    </View>

                    <Text style={styles.Text}>Total Earning</Text>
                  </View>
                  <View style={{padding: RW(0.7)}}>
                    <Text style={styles.Text}>150</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      // marginHorizontal: RW(5),
                      color: '#fff',
                      fontSize: 18,
                    }}>
                    Finished Tasks
                  </Text>
                </View>
                <View style={styles.container}>
                  <LinearGradient
                    colors={['#495463', 'rgba(7, 81, 12, 0)', '#4954635E']}
                    style={styles.gradient}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}>
                    <View style={styles.containerItem}>
                      <View style={{paddingHorizontal: 10}}>
                        <View style={styles.gap}>
                          <Image source={RunIcon} />
                          <Text style={{color: '#fff', fontSize: 12}}>
                            0/150 min
                          </Text>
                        </View>
                        <View style={styles.gap}>
                          <Image source={RunIcon} />
                          <Text style={{color: '#fff', fontSize: 12}}>
                            0/150 min
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.ViewAllbtn}>
                          <Text style={{color: '#fff'}}>View All</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{padding: 10}}>
                        <CircularProgressBar value={60} />
                      </View>
                    </View>
                  </LinearGradient>
                  {/* <ImageSlider/> */}
                </View>
                {/* <ImageSlider /> */}
                <View style={[styles.TotalEarning, {height: 67}]}>
                  <View style={styles.Earning}>
                    <View style={{}}>
                      <Image source={distance} />
                    </View>
                    <View></View>
                    <Text style={styles.Text}>Longest Distance</Text>
                  </View>

                  <Text style={[styles.Text, {alignSelf: 'center'}]}>
                    3.2 Km
                  </Text>
                </View>
                <View style={{height: 60}}></View>
                {/* <MyTabs /> */}
              </View>
              <Modal isVisible={ismodalVisible}>
                <View style={{alignSelf: 'center'}}>
                  <View style={{backgroundColor: 'transparent'}}>
                    <View style={styles.modal1}>
                      <Text
                        style={{
                          // alignSelf: 'center',
                          color: '#fff',
                          padding: RH(3),
                          fontSize: 12,
                          lineHeight: 23,
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Elementum lacus ultrices fringilla condimentum
                        malesuada. Ac nullam vulputate augue aliquet.
                      </Text>
                      <TouchableOpacity onPress={showModal}>
                        <Text style={styles.btn}>Connect</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </ScrollView>
          <Bottom onPressRunner={handleRunner} />
        </ImageBackground>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '90%',
    // alignSelf: 'center',
   marginVertical:20
    // marginVertical: RH(1.8),
  },
  headImage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: RH(2.2),
  },
  HeadText: {
    color: colors.white,
    fontSize: RFS(2),
  },
  img: {
    marginVertical: RH(1),
  },
  TotalEarning: {
    height: 46,
    // width: 338,

    paddingHorizontal: 10,
    backgroundColor: 'rgba(230, 210, 220, 0.10)',
    marginVertical: RH(2.3),
    flexDirection: 'row',
    // alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    // padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    // elevation: 4,
  },
  Text: {
    color: '#fff',
  },
  container: {
    height: 156,
    // width: 338,
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
  },
  ViewAllbtn: {
    height: RH(3),
    width: RW(17),
    justifyContent: 'center',
    backgroundColor: '#199608',
    alignSelf: 'center',
    marginVertical: RH(3),
    alignItems: 'center',
    borderRadius: 4,
  },
  gap: {
    flexDirection: 'row',
    gap: RW(3),
    marginVertical: RH(0.8),
  },
  circle: {
    height: RH(2),
    width: RW(4),
    backgroundColor: 'green',
    alignSelf: 'center',
    borderRadius: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#434242',
  },
  circle1: {
    height: RH(2),
    width: RW(4),
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderRadius: 30,
    marginVertical: 10,
    borderColor: '#434242',
    borderWidth: 3,
  },
  card: {
    //  flex: 1,
    // flex:0.3,
    backgroundColor:'transparent',
    // width: '90%',
    flexDirection: 'row',
    // alignSelf: 'center',
    alignItems:'center',
    justifyContent: 'space-between',
    // gap: RH(3.4),
    marginTop: RH(3),
  },
  Earning: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: RW(2),
  },
  card1: {
    height: RH(3),
    alignItems: 'center',
    justifyContent: 'center',
    width: RW(6),
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: 'red',
    height: 50,
    // alignItems: 'center',
    // width: '90%',
    borderRadius: 10,
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
  btn: {
    height: 34,
    width: 219,
    alignSelf: 'center',
    backgroundColor: '#199608',
    justifyContent: 'center',
    // textAlign: 'center',
    color: '#fff',
    borderRadius: 2,
    fontSize: 24,
    textAlign: 'center',
    alignItems: 'center',
  },
  modal1: {
    width: 339,
    height: 178,
    backgroundColor: '#0A0A0A',
    borderRadius: 20,
    alignItems: 'center',
    // justifyContent:'center',
    // marginHorizontal: RW(6),
    // alignSelf:"center"
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  container1: {
    flex: 1,
  },
});
