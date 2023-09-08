import {StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Customheader = () => {
  
  
  return (
    <View style={{}}>
      {/* header Part  */}
      <View style={styles.header_heading}>
        <TouchableOpacity>

        <AntDesign name="left" size={25} style={styles.body_text} />
        </TouchableOpacity>
        <Text style={styles.text_heading}>Edit Public Profile</Text>
        <View style={{width: 20}}></View>
      </View>
    </View>
  );
};

export default Customheader;

const styles = StyleSheet.create({
  chevron_left: {
    // height: 28,
    // width: 28,
  },

  text_heading: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Gilroy-Regular',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  header_heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body_text: {
    fontFamily: 'Gilroy-Regular',
    // fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.87)',
  },
});
