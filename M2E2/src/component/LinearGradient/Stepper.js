import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Stepper from 'react-native-stepper-ui';

const MyComponent = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const Stepper1 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [page, setPage] = useState(1);

  const handleNextStep = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleNextPage = () => {
    if (page < 3) {
      setPage(page + 1);
      setActiveStep(0); // Reset active step to 0 when moving to the next page
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setActiveStep(2); // Reset active step to 2 when moving to the previous page
    }
  };

  let content = [{title: 'Step 1'}, {title: 'Step 2'}, {title: 'Step 3'}];

  return (
    <View style={{marginVertical: 80, marginHorizontal: 20}}>
      <Stepper
        active={activeStep}
        content={content.map(item => (
          <MyComponent title={item.title} key={item.title} />
        ))}
        onBack={handlePreviousStep}
        onFinish={handleNextPage}
        onNext={handleNextStep}
        showButton={false}
      />
      {page !== 1 && (
        <TouchableOpacity onPress={handlePreviousPage}>
     
        </TouchableOpacity>
      )}
      {page !== 3 && (
        <TouchableOpacity onPress={handleNextPage}>
    
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Stepper1;
