import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle';

const ImageSlider = () => {
  return (
    <ProgressCircle
      percent={30}
      radius={50}
      borderWidth={8}
      color="#3399FF"
      shadowColor="#999"
      bgColor="#fff"
    >
      <Text style={{ fontSize: 18 }}>{'30%'}</Text>
    </ProgressCircle>
  );
};




export default ImageSlider;

const styles = StyleSheet.create({})