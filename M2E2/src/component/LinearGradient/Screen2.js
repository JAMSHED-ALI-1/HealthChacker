// Screen1.js
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Screen2 = ({navigation}) => {
  return (
    <View>
      <Text>Screen 1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
        <Text>Go to Screen ghahsfghfa2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
