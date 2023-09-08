import {StyleSheet, Text, View, StatusBar,Image,ScrollView,FlatList, Touchable, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import DatePick from '../component/LinearGradient/DatePicker';
import { useState } from 'react';
import { Calender } from '../constants/image';
import Custom from '../component/LinearGradient/CustomHero';
import { shoes2 } from '../constants/image';
import DatePicker from '../component/LinearGradient/DatePicker';
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';


const Running = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const data = [
    {id: '1', imageSource: require('../assets/images/Shoess.png')},
    {id: '1', imageSource: require('../assets/images/Shoess.png')},
    {id: '1', imageSource: require('../assets/images/Shoess.png')},
    {id: '1', imageSource: require('../assets/images/Shoess.png')},
  ];
  const render = ({item}) => (
    <Custom Imagesource={item.id} /> 
    
  );

  
  

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
          {/* <TouchableOpacity style={{}}>
            <View style={styles.calender}>
              <Text style={{color: '#fff'}}>Select Date</Text>
              <Image
                source={Calender}
                resizeMode="contain"
                style={{height: 14}}
              />
            </View>
            
          </TouchableOpacity> */}
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

export default Running;

const styles = StyleSheet.create({
  calender: {
    height: 29,
    width: 112,
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent:'space-between',
    borderWidth:2,
  
    borderRadius: 15,
    borderBottomColor: '#8DC388',
    borderTopColor: '#814F81',
    borderLeftColor: '#9CA6C9',
    borderRightColor: '#9CA6C9',
    padding: 4,
  },
  datebtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 15,
    paddingHorizontal:30,
    borderRadius: 20,
  },
});
