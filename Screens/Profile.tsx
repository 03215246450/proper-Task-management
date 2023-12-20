
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native'
import rncStyles from 'rncstyles'

export default function Profile({ route , navigation }: any) {

    const { user } = route.params || {}; // Access user information from route.params


    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.justifyContentCenter
                ]}>
                <ScrollView>
                    <View
                        style={[
                            rncStyles.p2,
                            rncStyles.py5
                        ]}
                    >
                        <View
                            style={rncStyles.flexCenter}>
                            <Image
                                resizeMode='contain'
                                style={[
                                    rncStyles.roundedPill,
                                    { width: 140, height: 140 }
                                ]}
                                source={{
                                    uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-Transparent.png'
                                }}
                            />
                        </View>
                        <View
                            style={rncStyles.flexCenter}
                        >
                            <Text
                                style={[
                                    rncStyles.fs1,
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.mb1
                                ]}
                            >{user.fullName}</Text>
                            <Text
                                style={[
                                    rncStyles.fs5,
                                    rncStyles.textSecondary,
                                ]}
                            >@{user.email}</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("Signup")
                            }}
                                style={[
                                    rncStyles.btnPrimary,
                                    rncStyles.mt1
                                ]}
                            >
                                <Text
                                    style={rncStyles.textWhite}
                                >Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View
                        style={rncStyles.p2}
                    >
                        <View
                            style={[
                                rncStyles.p1,
                                rncStyles.mb2,
                                rncStyles.borderBottom1,
                                rncStyles.borderLight
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.textSecondary,
                                    rncStyles.textBold,
                                ]}
                            >Full Name</Text>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs3,
                                ]}
                            >{user.fullName}</Text>
                        </View>
                        <View
                            style={[
                                rncStyles.p1,
                                rncStyles.mb2,
                                rncStyles.borderBottom1,
                                rncStyles.borderLight
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.textSecondary,
                                    rncStyles.textBold,
                                ]}
                            >Email</Text>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs3,
                                ]}
                            >{user.email}</Text>
                        </View>


                    </View>
                </ScrollView>

            </View>
        </View>
    </>
}

