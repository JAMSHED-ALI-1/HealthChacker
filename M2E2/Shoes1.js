import React from 'react';
import {StyleSheet, View, StatusBar, FlatList,ImageBackground} from 'react-native';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  BackgroundImg
} from './src/constants/image';
import {
  responsiveHeight as RH,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import CustomBackground from './src/component/LinearGradient/CustomBackground';

const data = [
  {id: 1, backgroundImage: image1, text: 'Item 1'},
  {id: 2, backgroundImage: image2, text: 'Item 2'},
  {id: 3, backgroundImage: image3, text: 'Item 3'},
  {id: 4, backgroundImage: image4, text: 'Item 4'},
  {id: 5, backgroundImage: image5, text: 'Item 5'},
  {id: 6, backgroundImage: image6, text: 'Item 6'},
  {id: 7, backgroundImage: image5, text: 'Item 5'},
  {id: 8, backgroundImage: image6, text: 'Item 6'},
];

const Shoes1 = () => {
  return (
    <View style={{}}>
     <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <FlatList
          data={data}
          columnWrapperStyle={{height:202,alignSelf:'center',columnGap:12}}
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
