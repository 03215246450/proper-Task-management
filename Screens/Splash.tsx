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

const Splash = ({navigation } : any ) => {
    
// const Splash = ({ navigation }: any) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        // Navigate to the "Work Flow" screen after 2 seconds
        navigation.navigate('Splash2');
      }, 2000); // 2000 milliseconds = 2 seconds
  
      // Clear the timer on component unmount to avoid memory leaks
      return () => clearTimeout(timer);
    }, [navigation]);
  return (
    <>
      <Image
        style={[rncStyles.h50, rncStyles.w100]}
        source={{ uri: 'https://mlu1pc3gbyl1.i.optimole.com/BUAxv5M.GwQJ~22534/w:800/h:556/q:mauto/rt:fill/g:ce/https://runwebco.com/wp-content/uploads/2021/08/4.png' }}
      />
      <View style={[rncStyles.border, rncStyles.bgWhite, rncStyles.h75, rncStyles.w100]}>
        <Text style={[rncStyles.fsL, rncStyles.bgWhite, { color: "#CC7DFF" }, rncStyles.textBold, rncStyles.textCenter]}>Taskcy</Text>
        <Text style={[rncStyles.fsL, rncStyles.bgWhite, { color: "#000" }, rncStyles.textBold, rncStyles.textCenter]}>Building better WorkPLace </Text>
        <TouchableOpacity  onPress={() => {navigation.navigate("Work Flow")}}
        style={[rncStyles.btn  , rncStyles.p2, rncStyles.my2, { color: "#000" , backgroundColor: "#CC7DFF"  }, ]}>
          <Text style={[rncStyles.f3 ,rncStyles.textBold, rncStyles.textCenter]}>get Started</Text></TouchableOpacity>
      </View>
      
    </>


  );
};



export default Splash;

// ya Home SCreesn ha