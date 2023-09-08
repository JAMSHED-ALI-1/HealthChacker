import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';

const CustomCard = ({imageSource, text, height, width}) => {
  return (
    <View style={[styles.container, {height, width}]}>
   

      <LinearGradient
        colors={['#495463', 'rgba(7, 8, 10, 0)', '#4954635E']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Image source={imageSource} />
        <Text style={{color:'#fff',fontSize:12}}>{text}</Text>
      </LinearGradient>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden', 
  },
  gradient: {
     flex:1,
     
    height: 102,
      // width: "100%",
      paddingHorizontal:16,
    justifyContent: 'center',
    alignItems: 'center',
    // color:'white'
    borderWidth: 2,
 borderRadius:20,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
   
  },
});

export default CustomCard;
