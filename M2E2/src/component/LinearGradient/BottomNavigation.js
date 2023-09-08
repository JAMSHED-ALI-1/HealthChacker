// // import React from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { responsiveHeight as RH, responsiveWidth as RW } from 'react-native-responsive-dimensions';
// import { Home1, Runner, Runner1, Stock } from '../../constants/image';

// const LinearGradientComponent = () => {
//   return (
//     <LinearGradient
//       colors={['#495463', 'rgba(7, 81, 12, 0)', '#4954635E']}
//       style={styles.gradient}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 0, y: 1 }}
//     >
//       <View style={styles.container}>
//         <TouchableOpacity>
//           <Image source={Home1} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <ImageBackground source={Runner} resizeMode="contain" style={styles.runnerBackground}>
//             <Image
//               source={Runner1}
//               resizeMode="contain"
//               style={styles.runnerImage}
//             />
//           </ImageBackground>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image source={Stock} />
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//     borderRadius: RW(5),
//     alignSelf: 'center',
//     width: '99%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: RW(6),
//   },
//   container: {
//     flex: 1,
//     height: RH(2),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   runnerBackground: {
//     height: 52,
//     width: 50,
//   },
//   runnerImage: {
//     zIndex: -1,
//     height: 50,
//   },
// });

// export default LinearGradientComponent;
import { View, Text } from 'react-native'
import React from 'react'

const BottomNavigation = () => {
  return (
    <View>
      <Text>BottomNavigation</Text>
    </View>
  )
}

export default BottomNavigation