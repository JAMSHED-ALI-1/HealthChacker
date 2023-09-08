import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {shoes2,LeftArrow} from '../../constants/image';

const Custom = ({imageSource}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.20)', 'rgba(255, 255, 255, 0.000)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 1]}
        style={styles.gradient}>
        <View style={{flexDirection: 'row',paddingHorizontal:10}}>
          <View style={styles.imgBox}>
            <Image
              // source={require('../../assets/images/Shoess.png')}
              source={imageSource}
              resizeMode="contain"
              style={{height: 80, width: 85}}
            />
          </View>
          <View style={{flexDirection: 'row', columnGap: 30,alignItems:"center"}}>
            <View style={{gap: 5}}>
              <Text style={styles.text}>10 June</Text>
              <Text style={styles.text}>2.3 KM</Text>
              <Text style={styles.text}>00:03:31</Text>
            </View>
            <View style={{gap: 5}}>
              <Text style={styles.text}>{''}</Text>
              <Text style={styles.text}>{''}</Text>
              <Text style={styles.text}>00:03:31</Text>
            </View>
            <View>
              <Image
                source={LeftArrow}
                resizeMode="contain"
                style={{height: 14, width: 12,marginLeft:10}}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  gradient: {
    padding: 20,
    // borderRadius: 10,
    height: 125,
    //  width: 390,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginTop: 9,
  },
  imgBox: {
    height: 90,
    width: 92,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 20,
    // marginHorizontal:8
  },
  text: {
    color: '#fff',
    fontSize: 16,
    // rowGap:20,
    marginHorizontal: 10,
  },
});

export default Custom;
