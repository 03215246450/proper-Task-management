// import { View, TextInput, TouchableOpacity, Text, ScrollView, ToastAndroid } from 'react-native'
// import rncStyles from 'rncstyles'
// import { useState } from 'react';
// import axios from 'axios';


// export default function BackendSignup({ navigation }: any) {

//     const [model, setModel] = useState<any>({})



// const signupUser = async () => {
//     try {
//       const response = await axios.post("http://192.168.100.158:5000/auth/signup", model);
//       console.log(response.data);
//     navigation.navigate("Backend Login")
//     }catch (error) {
//         console.error("Signup failed:", error);
//         ToastAndroid.show("Signup failed. Please try again.", ToastAndroid.SHORT);
//       }
      
//   };

    

//     return <>
//         <View
//             style={[
//                 rncStyles.h100,
//                 rncStyles.bgWhite
//             ]}>
//             <View
//                 style={[
//                     rncStyles.h100,
//                     rncStyles.p2,
//                     rncStyles.justifyContentCenter
//                 ]}>
//                 <View
//                     style={rncStyles.py5}>
//                     <Text
//                         style={[
//                             rncStyles.fs1,
//                             rncStyles.textPrimary,
//                             rncStyles.textBold,
//                             rncStyles.mb1
//                         ]}
//                     >Sign Up</Text>
//                     <Text
//                         style={[
//                             rncStyles.fs5,
//                             rncStyles.textSecondary
//                         ]}
//                     >Please Enter Your Information and create Acount.</Text>
//                 </View>
//                 <ScrollView>
//                     <View style={rncStyles.pb1}>
//                         <Text style={[rncStyles.textPrimary, rncStyles.p1]}>User Name</Text>
//                         <TextInput
//                             value={model.userName}
//                             onChangeText={(e) => setModel({ ...model, userName: e })}
//                             style={[
//                                 rncStyles.input,
//                                 rncStyles.bgWhite,
//                                 rncStyles.rounded,
//                                 rncStyles.border1,
//                                 rncStyles.borderPrimary,
//                             ]}
//                             placeholder="eg. Muhammad Zaid"
//                         />
//                     </View>
              
//                     <View style={rncStyles.pb1}>
//                         <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Email</Text>
//                         <TextInput
//                             value={model.email}
//                             onChangeText={(e) => setModel({ ...model, email: e })}
//                             keyboardType="email-address"
//                             style={[
//                                 rncStyles.input,
//                                 rncStyles.bgWhite,
//                                 rncStyles.rounded,
//                                 rncStyles.border1,
//                                 rncStyles.borderPrimary,
//                             ]}
//                             placeholder="example@abc.com"
//                         />
//                     </View>
//                     <View style={rncStyles.pb1}>
//                         <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Password</Text>
//                         <TextInput
//                             value={model.password}
//                             onChangeText={(e) => setModel({ ...model, password: e })}
//                             secureTextEntry={true}
//                             style={[
//                                 rncStyles.input,
//                                 rncStyles.bgWhite,
//                                 rncStyles.rounded,
//                                 rncStyles.border1,
//                                 rncStyles.borderPrimary,
//                             ]}
//                             placeholder="Enter Password at least 6 characters"
//                         />
//                     </View>
//                     <View
//                         style={rncStyles.py2}
//                     >
//                         <TouchableOpacity
//                             onPress={signupUser}
//                             style={[
//                                 rncStyles.btnPrimary,
//                                 rncStyles.rounded
//                             ]}
//                         >
//                             <Text
//                                 style={[
//                                     rncStyles.fs5,
//                                     rncStyles.textWhite,
//                                     rncStyles.textCenter
//                                 ]}
//                             >Sign Up</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//                 <View
//                     style={[
//                         rncStyles.py2,
//                         rncStyles.flexRow,
//                         rncStyles.justifyContentCenter
//                     ]}
//                 >
//                     <Text
//                         style={[
//                             rncStyles.textBold,
//                             rncStyles.textSecondary,
//                             rncStyles.fs5
//                         ]}
//                     >Have an Account?</Text>
//                     <TouchableOpacity onPress={()=> {navigation.navigate("Backend Login")}} >
//                         <Text
//                             style={[
//                                 rncStyles.textBold,
//                                 rncStyles.fs5,
//                                 rncStyles.ms1,
//                                 rncStyles.textPrimary
//                             ]}
//                         >Login</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     </>
// }















// +++++++++++++++++ signup+++++++++++++++++++

import { View, TextInput, TouchableOpacity, Text, ScrollView, ToastAndroid } from 'react-native'
import rncStyles from 'rncstyles'
import { useState } from 'react';
import axios from 'axios';


export default function BackendSignup({ navigation }: any) {

    const [model, setModel] = useState<any>({})

console.log("model",model)

const signupUser = async () => {
    try {
      const response = await axios.post("http://192.168.105.139:5000/auth/signup", model);
      console.log("response",response);
    navigation.navigate("Backend Login")
    } catch (error: any) {
      console.log("Signup failed:", error.response.data);
    }
  };

    

    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.p2,
                    rncStyles.justifyContentCenter
                ]}>
                <View
                    style={rncStyles.py5}>
                    <Text
                        style={[
                            rncStyles.fs1,
                            rncStyles.textPrimary,
                            rncStyles.textBold,
                            rncStyles.mb1
                        ]}
                    >Sign Up</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Enter Your Information and create Acount.</Text>
                </View>
                <ScrollView>
                    <View style={rncStyles.pb1}>
                        <Text style={[rncStyles.textPrimary, rncStyles.p1]}>User Name</Text>
                        <TextInput
                            value={model.userName}
                            onChangeText={(e) => setModel({ ...model, userName: e })}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary,
                            ]}
                            placeholder="eg. Muhammad Zaid"
                        />
                    </View>
              
                    <View style={rncStyles.pb1}>
                        <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Email</Text>
                        <TextInput
                            value={model.email}
                            onChangeText={(e) => setModel({ ...model, email: e })}
                            keyboardType="email-address"
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary,
                            ]}
                            placeholder="example@abc.com"
                        />
                    </View>
                    <View style={rncStyles.pb1}>
                        <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Password</Text>
                        <TextInput
                            value={model.password}
                            onChangeText={(e) => setModel({ ...model, password: e })}
                            secureTextEntry={true}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary,
                            ]}
                            placeholder="Enter Password at least 6 characters"
                        />
                    </View>
                    <View
                        style={rncStyles.py2}
                    >
                        <TouchableOpacity
                            onPress={signupUser}
                            style={[
                                rncStyles.btnPrimary,
                                rncStyles.rounded
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.fs5,
                                    rncStyles.textWhite,
                                    rncStyles.textCenter
                                ]}
                            >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View
                    style={[
                        rncStyles.py2,
                        rncStyles.flexRow,
                        rncStyles.justifyContentCenter
                    ]}
                >
                    <Text
                        style={[
                            rncStyles.textBold,
                            rncStyles.textSecondary,
                            rncStyles.fs5
                        ]}
                    >Have an Account?</Text>
                    <TouchableOpacity onPress={()=> {navigation.navigate("Backend Login")}} >
                        <Text
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

// +++++++++++++++++ signup+++++++++++++++++++
