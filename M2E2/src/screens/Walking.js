import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import DatePick from '../component/LinearGradient/DatePicker';
import {useState} from 'react';
import {Calender} from '../constants/image';
import Custom from '../component/LinearGradient/CustomHero';
import {Group2} from '../constants/image';
import DatePicker from '../component/LinearGradient/DatePicker';

const Walking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const data = [
    {id: '1', imageSource: Group2},
    {id: '1', imageSource: Group2},
    {id: '1', imageSource: Group2},
    {id: '1', imageSource: Group2,},
  ];
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#093615'} />

      <LinearGradient
        colors={['#080E18', '#1EB808', '#080E19', '#080E16', '#080E18']}
        style={{height: '100%', width: '100%'}}
        start={{x: 0, y: 0.8}}
        end={{x: 23, y: -10}}>
        <View style={styles.datebtn}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 700}}>
            Sport Log
          </Text>
          {/* <View style={styles.calender}>
            <Text style={{color: '#fff', padding: 2}}>Select Date</Text>
            <Image
              source={Calender}
              resizeMode="contain"
              style={{height: 15}}
            />
          </View> */}
          <View>
            <DatePicker />
          </View>
        </View>
        <ScrollView style={{}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Custom imageSource={item.imageSource} />}
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Walking;

const styles = StyleSheet.create({
  calender: {
    height: 29,
    width: 115,
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,

    borderRadius: 15,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    padding: 2,
  },
  datebtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 15,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
});
