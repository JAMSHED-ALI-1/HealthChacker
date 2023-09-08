import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Stepper1 = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Page 1 */}
      {activeStep === 1 && (
        <View style={styles.pageContainer}>
          <Text style={styles.pageTitle}>Step 1</Text>
          {/* Your Step 1 content goes here */}
          <TouchableOpacity onPress={handleNextStep} style={styles.button}>
            <Text style={{color:'red'}}>Next hello ji kese ho Apppp</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default Stepper1;
