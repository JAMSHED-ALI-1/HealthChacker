import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
// import Splash from './src/component/LinearGradient/linearGradient'
import LinearGradient from 'react-native-linear-gradient';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import Splash from './src/screens/splesh';
import Splash from './src/screens/splesh';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgetPassword from './src/screens/ForgetPassword';
import CreateNewPass from './src/screens/CreateNewPass';
import SelectGender from './src/screens/SelectGender';
import WeightOfUser from './src/screens/WeightOfUser';
import HightOfUser from './src/screens/HightOfUser';
import Location from './src/screens/Location';
import Home from './src/screens/Home';
import Button1 from './src/component/LinearGradient/Button';
import ImageSlider from './src/component/LinearGradient/ImageSlider';
import {BottomNavigation, TextInput} from 'react-native-paper';
import Bottom from './src/component/LinearGradient/Bottom';
import SelectMode from './src/screens/SelectMode';
import Notification from './src/screens/Notification';
import Shoes from './src/screens/Shoes';
import ShoesDetail from './src/screens/ShoesDetail';
import CustomTextInput from './src/component/LinearGradient/TextInput';
import RadialGradientComponent from './src/component/LinearGradient/Screen4';
import Sporting from './src/screens/Sporting';
import DatePick from './src/component/LinearGradient/DatePicker';
import Custom from './src/component/LinearGradient/CustomHero';
import StartPlay from './src/screens/StartPlay';
import PlayGame from './src/screens/PlayGame';
import StartGame from './src/screens/Play';
import Run from './src/screens/Run';
import Resume from './src/screens/Resume';
import Setting from './src/screens/Setting';
import EditProfile from './src/screens/EditProfile';
import TermCondition from './src/screens/TermCondition';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import ShereYourRun from './src/screens/ShereYourRun';
import CustomTimer from './src/component/LinearGradient/Timer';
import DropDownShoes from './src/component/LinearGradient/DropDownShoes';
import DatePicker from './src/component/LinearGradient/DatePicker';
import Kyc from './Section_1/Kyc';
import Account_Details from './Section_1/Account_Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Kyc">
        <Stack.Screen
          name="splesh"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateNewPass"
          component={CreateNewPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectGender"
          component={SelectGender}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="WeightOfUser"
          component={WeightOfUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeightOfUser"
          component={HightOfUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Button1"
          component={Button1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImageSlider"
          component={ImageSlider}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={Bottom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectMode"
          component={SelectMode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shoes"
          component={Shoes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShoesDetail"
          component={ShoesDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomTextInput"
          component={CustomTextInput}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RadialGradientComponent"
          component={RadialGradientComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sporting"
          component={Sporting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Custom"
          component={Custom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartPlay"
          component={StartPlay}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PlayGame"
          component={PlayGame}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartGame"
          component={StartGame}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Run"
          component={Run}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Resume"
          component={Resume}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermCondition"
          component={TermCondition}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShereYourRun"
          component={ShereYourRun}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomTimer"
          component={CustomTimer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DropDownShoes"
          component={DropDownShoes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DatePicker"
          component={DatePicker}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Kyc"
          component={Kyc}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Account_Details"
          component={Account_Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
