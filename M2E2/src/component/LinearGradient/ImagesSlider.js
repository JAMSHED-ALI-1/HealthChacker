import React, { useState } from 'react';
import { View, StyleSheet ,Image} from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChanged = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <Swiper
        loop
        autoplay
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        // onIndexChanged={handleIndexChanged}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            {/* You can customize the slide content here */}
            {/* For example, display the image using an Image component */}
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
      {/* Render pagination dots or any other UI components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 160,
  },
  slide: {
    flex: 1,

    alignItems: 'center',
  },
  dotStyle: {
    top: 33,
    borderRadius: 5,
    backgroundColor: 'rgba(128, 128, 128, 0.92)',

  },
  activeDotStyle: {
    width: 12,
     height: 12,
    top: 33,
    borderRadius: 6,
    backgroundColor: '#1EB808',
    // marginHorizontal: 4,
  },
  image: {
    // height: 139,
    // resizeMode: 'cover',
    width:350,
    borderRadius:20
  },
});

export default ImageSlider;


// const ImageSlider = ({images}) => {
//   return (
//     <View style={{height: 175}}>
//       <SliderBox
//         images={images}
//         autoplay
//         // circleLoop
//         sliderBoxHeight={RH(20)}
//         resizeMethod={'resize'}
//         resizeMode={'cover'}
//         // paginationBoxVerticalPadding={10}
//         ImageComponentStyle={{borderRadius: 15, width: '92%'}}
//         dotColor={'#1EB808'}
//         dotStyle={{
     

//           marginTop:20,
//           marginHorizontal: 0,
//           padding: 0,
//           margin: 0,
//           backgroundColor: 'rgba(128, 128, 128, 0.92)',
//         }}
//         // Add any additional psdvsdsdhsdshdhs;dgj;sgdrops for customization as needed
//       />
//       {/* <View style={{flexDirection: 'row',alignItems:'center'}}>
//         <View style={styles.circle}></View>
//         <View style={styles.circle}></View>
//         <View style={styles.circle}></View>
//       </View> */}
//     </View>
//   );
// };

// export default ImageSlider;
// const styles=StyleSheet.create({
//   circle:{
//     height:10,
//     width:10,
//     borderRadius:50,
//     backgroundColor:'red',
//     alignSelf:'center'
//   }

// })
