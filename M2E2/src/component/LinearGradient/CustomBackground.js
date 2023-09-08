import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';

const CustomBackground = ({backgroundImage, text}) => {
  const navigation = useNavigation();
  const handleRunning = () => {
    navigation.navigate('ShoesDetail');
  };
  return (
    <TouchableOpacity onPress={handleRunning}>
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
          imageStyle={{height: 202, width: 159}}>
          <View
            style={{
              flexDirection: 'row',
              height: 20,
              width: 153,
              backgroundColor: 'rgba(7, 41, 6, 0.50)',
              borderRadius: 20,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 10}}>Shoe Name</Text>
            <Text style={{fontSize: 10}}>
              Level:<Text style={{color: '#1EB808'}}>14/19</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    // height: 202,
    // width: 159,
    top:15,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal:5,
    borderWidth: 2,
    borderRadius: RH(1),
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    gap:10

    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'space between',
    gap: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomBackground;
