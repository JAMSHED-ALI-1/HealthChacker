import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import ProgressCircle from 'react-native-progress-circle';

const CircularProgressBar = () => {
  return (
    <ProgressCircle
      percent={40}
      radius={60}
      borderWidth={15}
      color="#1EB808"
      shadowColor="#4954635E"
      bgColor="#495463"
      outerCircleStyle={{
        borderColor: 'transparent',
     
       
      }}>
      <Text style={{fontSize: 25, color: '#fff'}}>{'40%'}</Text>
      <Text style={{color: '#4C536E', fontSize: 10}}>{'this Week'}</Text>
    </ProgressCircle>
  );
};

export default CircularProgressBar;

const styles = StyleSheet.create({})