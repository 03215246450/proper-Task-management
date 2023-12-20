// // import { View, TextInput, TouchableOpacity, Text ,ToastAndroid } from 'react-native'
// // import rncStyles from 'rncstyles'
// // import { useState } from 'react'
// // import axios from 'axios'


// // export default function BackendLogin({ navigation }: any) {

// //     const [model, setModel] = useState<any>({})

// //     const noAcc = () => {
// //         navigation.navigate("Signup" )
// //     }
   

// //     const Login = async () => {
// //         try {
// //             const response = await axios.post("http://192.168.100.158:5000/auth/Login", model);
// //             const token = response.data.data.token;
// //             console.log(response.data);
// //             navigation.navigate("ApiRoutes", { token });
// //             ToastAndroid.show("Login Successfully",ToastAndroid.SHORT)
// //         } catch (error) {
// //             console.error("Login failed:", error);
// //         }
// //     };
    

// //     return <>
// //         <View
// //             style={[
// //                 rncStyles.h100,
// //                 rncStyles.bgWhite
// //             ]}>
// //             <View
// //                 style={[
// //                     rncStyles.h100,
// //                     rncStyles.p2,
// //                     rncStyles.justifyContentCenter
// //                 ]}>
// //                 <View
// //                     style={rncStyles.py5}>
// //                     <Text
// //                         style={[
// //                             rncStyles.fs1,
// //                             rncStyles.textPrimary,
// //                             rncStyles.textBold,
// //                             rncStyles.mb1
// //                         ]}
// //                     >Login</Text>
// //                     <Text
// //                         style={[
// //                             rncStyles.fs5,
// //                             rncStyles.textSecondary
// //                         ]}
// //                     >Please Sign in to continue.</Text>
// //                 </View>
// //                 <View>
// //                 <View
// //                         style={rncStyles.pb1}>
// //                         <Text
// //                             style={[
// //                                 rncStyles.textPrimary,
// //                                 rncStyles.p1
// //                             ]}
// //                         >userName</Text>
// //                         <TextInput value={model.userName}
// //                          onChangeText={(e) => setModel({ ...model, userName: e })}
// //                             style={[
// //                                 rncStyles.input,
// //                                 rncStyles.bgWhite,
// //                                 rncStyles.rounded,
// //                                 rncStyles.border1,
// //                                 rncStyles.borderPrimary
// //                             ]}
// //                             placeholder='example@abc.com'
// //                         />
// //                     </View>
// //                     <View
// //                         style={rncStyles.pb1}>
// //                         <Text
// //                             style={[
// //                                 rncStyles.textPrimary,
// //                                 rncStyles.p1
// //                             ]}
// //                         >Email</Text>
// //                         <TextInput value={model.email}
// //                          onChangeText={(e) => setModel({ ...model, email: e })}
// //                             style={[
// //                                 rncStyles.input,
// //                                 rncStyles.bgWhite,
// //                                 rncStyles.rounded,
// //                                 rncStyles.border1,
// //                                 rncStyles.borderPrimary
// //                             ]}
// //                             placeholder='example@abc.com'
// //                         />
// //                     </View>
// //                     <View
// //                         style={rncStyles.pb1}>
// //                         <Text
// //                             style={[
// //                                 rncStyles.textPrimary,
// //                                 rncStyles.p1
// //                             ]}
// //                         >Password</Text>
// //                         <TextInput  value={model.password}
// //                          onChangeText={(e) => setModel({ ...model, password: e })}
// //                             style={[
// //                                 rncStyles.input,
// //                                 rncStyles.bgWhite,
// //                                 rncStyles.rounded,
// //                                 rncStyles.border1,
// //                                 rncStyles.borderPrimary
// //                             ]}
// //                             placeholder='Enter Password atleast 6 characters'
// //                         />
// //                     </View>
// //                     <View
// //                         style={rncStyles.py1}
// //                     >
// //                         <TouchableOpacity>
// //                             <Text
// //                                 style={[
// //                                     rncStyles.textPrimary,
// //                                     rncStyles.textBold,
// //                                     rncStyles.fs5,
// //                                     rncStyles.textEnd
// //                                 ]}
// //                             >Forgot Password?</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                     <View
// //                         style={rncStyles.py2}
// //                     >
// //                         <TouchableOpacity
// //                             onPress={Login}
// //                             style={[
// //                                 rncStyles.btnPrimary,
// //                                 rncStyles.rounded
// //                             ]}
// //                         >
// //                             <Text
// //                                 style={[
// //                                     rncStyles.fs5,
// //                                     rncStyles.textWhite,
// //                                     rncStyles.textCenter
// //                                 ]}
// //                             >Login</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                 </View>
// //                 <View
// //                     style={[
// //                         rncStyles.py2,
// //                         rncStyles.flexRow,
// //                         rncStyles.justifyContentCenter
// //                     ]}
// //                 >
// //                     <Text
// //                         style={[
// //                             rncStyles.textBold,
// //                             rncStyles.textSecondary,
// //                             rncStyles.fs5
// //                         ]}
// //                     >Not Registerar yet?</Text>
// //                     <TouchableOpacity onPress={noAcc}>
// //                         <Text
// //                             style={[
// //                                 rncStyles.textBold,
// //                                 rncStyles.fs5,
// //                                 rncStyles.ms1,
// //                                 rncStyles.textPrimary
// //                             ]}
// //                         >Sign Up</Text>
// //                     </TouchableOpacity>
// //                 </View>
// //             </View>
// //         </View>
// //     </>
// // }

















// +++++++++++++login++++++++++++


import { View, TextInput, TouchableOpacity, Text ,ToastAndroid } from 'react-native'
import rncStyles from 'rncstyles'
import { useState } from 'react'
import axios from 'axios'


export default function BackendLogin({ navigation }: any) {

    const [model, setModel] = useState<any>({})

    const noAcc = () => {
        navigation.navigate("Signup" )
    }
   

    const Login = async () => {
        try {
            const response = await axios.post("http://192.168.100.109:5000/auth/Login", model);
            const token = response.data.data.token;
            console.log(response.data);
            navigation.navigate("ApiRoutes", { token });
            ToastAndroid.show("Login Successfully",ToastAndroid.SHORT)
        } catch (error) {
            console.error("Login failed:", error);
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
                    >Login</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Sign in to continue.</Text>
                </View>
                <View>
                <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >userName</Text>
                        <TextInput value={model.userName}
                         onChangeText={(e) => setModel({ ...model, userName: e })}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='example@abc.com'
                        />
                    </View>
                    <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >Email</Text>
                        <TextInput value={model.email}
                         onChangeText={(e) => setModel({ ...model, email: e })}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='example@abc.com'
                        />
                    </View>
                    <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >Password</Text>
                        <TextInput  value={model.password}
                         onChangeText={(e) => setModel({ ...model, password: e })}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='Enter Password atleast 6 characters'
                        />
                    </View>
                    <View
                        style={rncStyles.py1}
                    >
                        <TouchableOpacity>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs5,
                                    rncStyles.textEnd
                                ]}
                            >Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={rncStyles.py2}
                    >
                        <TouchableOpacity
                            onPress={Login}
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
                            >Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
                    >Not Registerar yet?</Text>
                    <TouchableOpacity onPress={noAcc}>
                        <Text
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}


// // +++++++++++++login+++++++++++++
