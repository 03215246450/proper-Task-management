// import React from 'react'
// import { Text, View } from 'react-native'

// const Splash = () => {
//   return (

// <View>
//     <Text>This is splash screen</Text>
// </View>
//     )
// }

// export default Splash








import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect } from 'react';
import rncStyles from 'rncstyles';
import Button from '../Components/Buttons';
// import secondScreen from './secondScreen';

const Splash3 = ({navigation } : any ) => {
    
// const Splash = ({ navigation }: any) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        // Navigate to the "Work Flow" screen after 2 seconds
        navigation.navigate('Home');
      }, 2000); // 2000 milliseconds = 2 seconds
  
      // Clear the timer on component unmount to avoid memory leaks
      return () => clearTimeout(timer);
    }, [navigation]);
  return (
    <>
      <Image
        style={[rncStyles.h50, rncStyles.w100]}
        source={require("../assets/intro2.png")}
      />
      <View style={[rncStyles.border, rncStyles.bgWhite, rncStyles.h75, rncStyles.w100]}>
        <Text style={[rncStyles.fsL, rncStyles.bgWhite, { color: "#CC7DFF" }, rncStyles.textBold, rncStyles.textCenter]}>Task management</Text>
        <Text style={[rncStyles.fsL, rncStyles.bgWhite, { color: "#000" }, rncStyles.textBold, rncStyles.textCenter]}>Work more structured and organized </Text>
        <TouchableOpacity  onPress={() => {navigation.navigate("Work Flow")}}
        style={[rncStyles.btn  , rncStyles.p2, rncStyles.my2, { color: "#000" , backgroundColor: "#CC7DFF"  }, ]}>
          <Text style={[rncStyles.f3 ,rncStyles.textBold, rncStyles.textCenter]}>get Started</Text></TouchableOpacity>
      </View>
      
    </>


  );
};



export default Splash3;

// ya Home SCreesn ha