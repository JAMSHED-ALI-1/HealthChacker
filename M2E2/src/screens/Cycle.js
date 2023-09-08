import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  ImageBackgroundBase
} from 'react-native';
import {
  image1,
  Ellipse,
  line1,
  line2,
  image2,
  image3,
  image4,
  image5,
  cloud,
  Cycle1,
  Cycle2,
  Cycle3,
  Cycle4,
  Cycle5,
  Cycle6,
  image6,
  BackgroundImg
} from '../constants/image';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import CustomBackground from '../component/LinearGradient/CustomBackground';

const Tab = createMaterialTopTabNavigator();

const data = [
  {id: 1, backgroundImage: Cycle1, text: 'Item 1'},
  {id: 2, backgroundImage: Cycle2, text: 'Item 2'},
  {id: 3, backgroundImage: Cycle3, text: 'Item 3'},
  {id: 4, backgroundImage: Cycle4, text: 'Item 4'},
  {id: 5, backgroundImage: Cycle5, text: 'Item 5'},
  {id: 6, backgroundImage: Cycle6, text: 'Item 6'},
  {id: 7, backgroundImage: image5, text: 'Item 5'},
  {id: 8, backgroundImage: image6, text: 'Item 6'},
];

const Shoes1 = () => {
  return (
    <View>
     <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <FlatList
          data={data}
          columnWrapperStyle={{height: 202, alignSelf: 'center', columnGap: 12}}
          keyExtractor={item => item.id.toString()} // Use toString() to convert id to a string
          renderItem={({item}) => (
            <CustomBackground
              backgroundImage={item.backgroundImage}
              text={item.text}
            />
          )}
          numColumns={2}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Make sure the LinearGradient fills the entire screen
  },
});

export default Shoes1;