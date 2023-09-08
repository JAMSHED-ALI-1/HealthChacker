// Screen1.js
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Screen1 = ({navigation}) => {
  return (
    <View>
      <Text>Screen 1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
        <Text>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;
