import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Calender} from '../../constants/image';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(selectedDate);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    console.log('clicked', date);
    const dt=new Date(date);
    const x=dt.toISOString().split("T");
    const x1=x[0].split('-');
    console.log(x1[2]+'/'+x1[1]+'/'+x1[0])

    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.date_box}>
          {selectedDate ? (
            <Text style={styles.selectedDateText}>
              {selectedDate}
            </Text>
          ) : (
            <>
              <Text style={styles.claender_Text}>Select Date</Text>
              <Image
                source={Calender}
                resizeMode="contain"
                style={styles.calender_img}
              />
            </>
          )}
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  date_box: {
    height: 29,
    width: 108,
    backgroundColor: '#2B2F2F',
    flexDirection: 'row',
    borderWidth: 2,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  calender_img: {
    height: 15,
    width: 15,
  },
  claender_Text: {
    color: 'rgba(255, 255, 255, 0.50)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 23,
  },
  selectedDateText: {
    color: 'rgba(255, 255, 255, 0.50)',
    fontSize: 12,
    // marginTop: 10,
    textAlign: 'center',
  },
});
