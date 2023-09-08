import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
const CustomCircularndicator = () => {
  return (
    <View>
      <CircularProgress
        value={60}
        radius={120}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={'#f39c12'}
        inActiveStrokeColor={'#9b59b6'}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={20}
        activeStrokeWidth={40}
      />
    </View>
  );
}

export default CustomCircularndicator;

const styles = StyleSheet.create({})