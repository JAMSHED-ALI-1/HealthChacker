// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Dimensions,
//   KeyboardAvoidingView,
//   ScrollView,
//   StatusBar,
// } from 'react-native';
// import {
//   responsiveHeight as RH,
//   responsiveFontSize as RFS,
//   responsiveWidth as RW,
// } from 'react-native-responsive-dimensions';
// import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import {
//   red100,
//   transparent,
// } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
// const hockyman = require('../assets/images/HockyMan.png');
// import {SIZES, colors} from '../theme/theme';
// import {bikeImage} from '../../constants/image';
// import {TextInput} from 'react-native-paper';
// import {useNavigation} from '@react-navigation/native';
// import ForgetPassword from '../../screens/ForgetPassword';
// import CustomTextInput from './TextInput';
// import Button1 from './Button';

// const Background = ({imageSourse}) => {
//   const navigation = useNavigation();
//   const handleRegister = () => {
//     console.log('chal raha h');
//     navigation.navigate('Register');
//   };
//   const hanleLogin = () => {
//     navigation.navigate('Home');
//   };
//   const handleForget = () => {
//     navigation.navigate('ForgetPassword');
//   };
//   const screenWidth = Dimensions.get('window').width;
//   const screenHeight = Dimensions.get('window').height;
//   return (
//     <View>
//       <StatusBar backgroundColor={'#091515'} />

//       <LinearGradient
//         colors={['#080E18', '#1EB808', '#080E19', '#080E16', '#080E18']}
//         style={{height: '100%', width: '100%'}}
//         start={{x: 0.5, y: 0.8}}
//         end={{x: 9, y: -12}}>
//         {/* <StatusBar backgroundColor={'#093615'} /> */}
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//           <ImageBackground
//             source={imageSourse}
//             resizeMode="contain"
//             style={{height: RH(70)}}>
//             <View
//               style={{height: RH(35), backgroundColor: 'transparent'}}></View>
//             <View
//               style={{
//                 height: RH(61),
//                 width: '93%',
//                 backgroundColor: 'transparent',
//                 alignSelf: 'center',
//               }}>
            
//                 <View
//                   style={{
//                     // width: '95%',
//                     alignItems: 'center',
//                     // alignSelf: 'center',
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                   }}>
//                   <Text style={{color: '#fff', fontWeight: 700, fontSize: 30}}>
//                     LOGIN
//                   </Text>
//                   <Image
//                     source={bikeImage}
//                     resizeMode="contain"
//                     style={{width: RW(25), height: RH(12)}}
//                   />
//                 </View>
//                 <View style={{gap: RH(3)}}>
//                   <View>
//                     <Text style={styles.TextItem}>Email</Text>
//                     <CustomTextInput
//                       placeholder="Enter Email Address"
//                       icon={'email'}
//                     />
//                   </View>
//                   <View>
//                     <Text style={styles.TextItem}>Password</Text>
//                     <CustomTextInput placeholder="Password" icon={'lock'} />
//                   </View>
//                 </View>
//                 <TouchableOpacity
//                   style={styles.forgetpass}
//                   onPress={handleForget}>
//                   <Text style={{fontSize: SIZES.secondry, color: colors.white}}>
//                     Forget Your Password?
//                   </Text>
//                 </TouchableOpacity>

//                 <Button1 text={'LOGIN'} onPress={hanleLogin} />

//                 <TouchableOpacity
//                   style={styles.registerbtn}
//                   onPress={handleRegister}>
//                   <Text
//                     style={{color: colors.registerbtn, fontSize: SIZES.btn}}>
//                     Register
//                   </Text>
//                 </TouchableOpacity>
            
//             </View>
//           </ImageBackground>
//         </ScrollView>
//       </LinearGradient>
//     </View>
//   );
// };

// export default Background;

// const styles = StyleSheet.create({
//   forgetpass: {
//     color: colors.white,
//     fontSize: SIZES.secondry,
//     alignSelf: 'center',
//     marginVertical: RH(2.2),
//   },
//   loginbtn: {
//     height: RH(7),
//     borderWidth: 2,
//     borderRadius: 10,
//     borderBottomColor: '#8DC388',
//     borderTopColor: '#814F81',
//     borderLeftColor: '#9CA6C9',
//     borderRightColor: '#9CA6C9',
//     elevation: 4,
//     shadowColor: 'rgba(0, 0, 0, 0.25)',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 1,
//     shadowRadius: 4,
//     alignItems: 'center',
//     marginVertical: RH(3),
//     justifyContent: 'center',
//   },
//   registerbtn: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   TextItem: {
//     // marginHorizontal: 18,
//     fontSize: 16,
   
//     color: '#fff',
//   },
// });
import { View, Text ,ImageBackground,ScrollView,Image, StyleSheet,StatusBar,TouchableOpacity} from 'react-native'

import React from 'react'
import { BackgroundImg,Login,bikeImage,Bike99 } from '../../constants/image'
import CustomTextInput from './TextInput'
import { Button } from 'react-native-paper'
import Button1 from './Button'
import { useNavigation } from '@react-navigation/native'

const Background = () => {
  const navigation=useNavigation();
  const handleRegister=()=>{
    console.log('chal raha h');
         navigation.navigate('Register');
    };
     const hanleLogin = () => {
    navigation.navigate('Home');
 };
 const handleForget = () => {
     navigation.navigate('ForgetPassword');
  };
  
  return (
    <View style={{}}>
      <StatusBar backgroundColor={'#091515'} />

      <ImageBackground source={Login} style={{height: '100%', width: '100%'}}>
        <View style={styles.container}>
          <View style={styles.header_login}></View>
          <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{rowGap: 15}}>
                <View style={styles.body_Heder}>
                  <Text style={styles.text_heading}>LOGIN</Text>
                  <Image
                    source={Bike99}
                    resizeMode="contain"
                    height={49}
                    width={84}
                  />
                </View>
                <View>
                  <Text style={styles.text_ItemNormal}>Email</Text>
                  <CustomTextInput placeholder={'Enter Email'} icon={'email'} />
                </View>
                <View>
                  <Text style={styles.text_ItemNormal}>Password</Text>
                  <CustomTextInput placeholder={'Enter Password'} icon={'lock'}/>
                </View>
                <TouchableOpacity onPress={handleForget}>
                  <Text style={[styles.text_ItemNormal, {alignSelf: 'center'}]}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
                <View>
                  <Button1 text={'LOGIN'} onPress={hanleLogin}/>
                </View>
                <View>
                  <TouchableOpacity onPress={handleRegister}>
                    <Text
                      style={[
                        styles.text_ItemNormal,
                        {alignSelf: 'center', color: '#1EB808'},
                      ]}>
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Background

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_login: {
    flex: 0.4,
    backgroundColor: 'transparent',
  },
  main:{
    flex:0.6,
    backgroundColor:'transparent',
    paddingHorizontal:20,

  },
  text_heading:{
 fontSize:30,
 fontWeight:'700',
 color:'#fff'

  },
body_Heder:{
  flexDirection:'row',
  justifyContent:'space-between',
},
text_ItemNormal:{
  fontSize:16,
  fontWeight:'400',
  lineHeight:23,
  color:'#fff'
}
});