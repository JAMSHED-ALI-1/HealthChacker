// import React from 'react';
// import {View, Image, StyleSheet} from 'react-native';
// import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';

// const DropDownShoes = () => {
//   const images = [
//     require('../../assets/images/Shoess.png'),
//     require('../../assets/images/Shoess.png'),
//     require('../../assets/images/Shoess.png'),
//   ];

//   const renderImage = image => (
//     <Image source={image} style={{width: 50, height: 50}} />
//   );

//   return (
//     <View>
//       <ModalDropdown 
       
//         options={images}
//         renderRow={image => renderImage(image)}
//         dropdownStyle={{width: 100}}
//       />
//     </View>
//   );
// };

// export default DropDownShoes;

// const styles = StyleSheet.create({});
import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';

const DropDownExample = () => {
  const options = [
    <Image
      source={require('../../assets/images/Shoess.png')}
      style={{width: 100, height: 100}}
    />,
    <Image
      source={require('../../assets/images/Shoess.png')}
    //   style={{width: 100, height: 100}}
    />,
    <Image
      source={require('../../assets/images/Shoess.png')}
    //   style={{width: 100, height: 100}}
    />,
    <Image
      source={require('../../assets/images/Shoess.png')}
    //   style={{width: 100, height: 100}}
    />,
  ];

  return (
    <View style={styles.container}>
      <ModalDropdown options={options} dropdownStyle={{width: 100}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DropDownExample;

