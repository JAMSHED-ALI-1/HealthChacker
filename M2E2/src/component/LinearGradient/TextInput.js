import React from 'react';
import {TextInput} from 'react-native-paper';
import {colors} from '../component/theme/theme';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons/';

const CustomTextInput = ({placeholder, icon,icon1, ...restProps}) => {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder={placeholder}
        placeholderTextColor={'#CDC2C2'}
        outlineColor="rgba(255, 255, 255, 0.20)"
        // outlineColor="red"
        activeOutlineColor="rgba(255, 255, 255, 0.20)"
        left={<TextInput.Icon icon={icon} color={'#CDC2C2'} />}
        right={<TextInput.Icon icon={icon1} color={'#CDC2C2'} style={{}}/>}
        outlineStyle={{
          borderRadius: 30,
          backgroundColor:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',

          alignItems: 'center',
        }}
        style={{height: 60, backgroundColor: '#CDC2C2',}}
        placeholderStyle={styles.placeholderStyle}
      />
    </View>
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  textInput: {},
  container: {
    // alignSelf: 'center',
    height: 60,
    // paddingHorizontal:10
    
  },
  placeholderStyle: {
    textAlign: 'center',
   
  },
});
