import React, {useState} from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {
  responsiveHeight as RH,
  responsiveFontSize as RFS,
  responsiveWidth as RW,
} from 'react-native-responsive-dimensions';

const CustomStepIndicator = ({currentPosition}) => {
  const labels = [
    'Cart',
    'Delivery Address',
    'Order Summary',
   
  ];
 
  
  
  const customStyles = {
    separatorStrokeWidth: 2, // Increase the width of the separator lines horizontally
    currentStepStrokeWidth: 2, // Increase the width of the current step stroke horizontally
    // ... other custom styles if needed
    //  stepIndicatorSize:50, // Increase the size of the step indicators
    // stepStrokeWidth: 3,
    //  stepIndicatorSize: 50, // Adjust the size of the step indicators as needed
    // currentStepIndicatorSize: RFS(5), // Adjust the size of the current step indicator as needed
    // separatorStrokeWidth: 2, // Adjust the width of the separator lines as needed
    // currentStepStrokeWidth: 2, // Adjust the width of the current step stroke as needed
    // stepStrokeCurrentColor: '#78A3F6', // Color of the finished step
    // // stepStrokeUnFinishedColor: '#D3D3D3', // Default color of the unfinished steps
    // separatorFinishedColor: '#78A3F6', // Color of the separator for finished steps
    // separatorUnFinishedColor: '#D3D3D3', // Default color of the separator for unfinished steps
    // stepIndicatorFinishedColor: '#78A3F6', // Color of the indicator dot for finished steps
    // stepIndicatorUnFinishedColor: '#D3D3D3', // Default color of the indicator dot for unfinished steps
    // stepIndicatorCurrentColor: '#78A3F6', // Color of the indicator dot for the current step
    // stepIndicatorLabelCurrentColor: '#78A3F6', // Color of the label for the current step
    // stepIndicatorLabelUnFinishedColor: '#D3D3D3',
    // separatorStrokeWidth: 3, // Increase the width of the separator lines
    // currentStepStrokeWidth: 3,
    // Customize your styles here
    // separatorStrokeUnfinishedWidth:10
  };

//   const [currentPosition, setCurrentPosition] = useState(0);

//   const onPageChange = position => {
//     setCurrentPosition(position);
//   };
 
  return (
    <View style={{marginVertical:RH(5),justifyContent:'flex-start',}}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
        //   labels={labels}
        //   onPress={onPageChange}
          stepCount={3}
        />
    </View>
  );
};

export default CustomStepIndicator;
