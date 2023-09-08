import { ImageBackground, StatusBar, StyleSheet, Text, View ,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BackgroundImg ,Arrow1} from '../constants/image'
import { useNavigation } from '@react-navigation/native'

const Notification = () => {
  const navigation=useNavigation();
  const [Hide,setHide]=useState(true);
  const handleclear=()=>{
    setHide(!Hide);
  }
  const handleBack=()=>{
 navigation.navigate('Home')
  }
  return (
    <View>
      <StatusBar backgroundColor={'#091515'} />
      <ImageBackground
        source={BackgroundImg}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.conatiner}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBack}>
              
            <Image
              source={Arrow1}
              resizeMode="conatain"
              style={styles.ArrowImg}
            />
            </TouchableOpacity>
            <Text style={styles.HeadingText}>Notification</Text>

            <TouchableOpacity
              style={[
                styles.ArrowImg,
                {
                  backgroundColor: '#1EB808',
                  width: 60,
                  justifyContent: 'center',
                  borderRadius: 10,
                  height: 34,
                  alignItems:"center"
                },
              ]} onPress={handleclear}>
              <Text style={{color: '#fff'}}>Clear All</Text>
            </TouchableOpacity>
          </View>
          {Hide  ? (
          <View style={{marginTop: 50, gap: 10}}>
            <View style={styles.items}>
              <Text style={styles.text}>
                Lorem ipsum is simply dummy text of the printng and typestting
                industry.Lorem ipsum is simply.
              </Text>
              <View style={styles.textItem}>
                <Text style={[styles.text]}>Jun 1st 2022</Text>
                <Text style={styles.text}>12:22</Text>
              </View>
            </View>
            <View style={styles.items}>
              <Text style={styles.text}>
                Lorem ipsum is simply dummy text of the printng and typestting
                industry.Lorem ipsum is simply.
              </Text>
              <View style={styles.textItem}>
                <Text style={[styles.text]}>Jun 1st 2022</Text>
                <Text style={styles.text}>12:22</Text>
              </View>
            </View>
            <View style={styles.items}>
              <Text style={styles.text}>
                Lorem ipsum is simply dummy text of the printng and typestting
                industry.Lorem ipsum is simply.
              </Text>
              <View style={styles.textItem}>
                <Text style={[styles.text]}>Jun 1st 2022</Text>
                <Text style={styles.text}>12:22</Text>
              </View>
            </View>

          </View>
          ):
        null}
        </View>
      </ImageBackground>
    </View>
  );
}

export default Notification

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 10,
  },
  ArrowImg: {
    height: 24,
    width: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeadingText: {
    color: '#fff',
    fontSize: 30,
  },
  items: {
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#BCBCBC',
    paddingHorizontal: 15,
  },
  textItem: {flexDirection: 'row', justifyContent: 'space-between'},
  text: {
    color: '#F5F5F5',
    fontSize: 12,
    marginTop:3
  },
});