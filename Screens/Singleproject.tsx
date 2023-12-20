import React from 'react'
import { View, Text, ScrollView, ToastAndroid } from 'react-native'
import rncStyles from 'rncstyles';
import IconBtn from '../Components/IconBtn';
import Button from '../Components/Buttons';
import { DelData, UpdateData } from '../FirebaseMethod.tsx/Firebase';

export default function Singleproject({ route, navigation }: any) {

    let obj = route.params;

    let delData = () => {
        DelData("Project", obj.id).then((res) => {
            console.log(res);
            ToastAndroid.show("project deleted Successfully ", ToastAndroid.SHORT)
            navigation.goBack
        }).catch((err) => {
            ToastAndroid.show("project not deleted", ToastAndroid.SHORT)
            console.log(err);
        })
    }


    let MarkAsDone = () => {
        UpdateData("Project", obj.id, { ...obj, isDone: true }).then((res) => {
            console.log(res);
            ToastAndroid.show("project has been marked as done successfully", ToastAndroid.SHORT)
            navigation.goBack()
        }).catch((err) => {
            console.log(err);
        })
    }
    

    return (<>
        <ScrollView>
            <View style={[rncStyles.bgWhite, rncStyles.m1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow3]}>
                <Text style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>{obj.title}</Text>
                <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>{obj.taskVal}</Text>
            </View>
            <View style={[rncStyles.py2, rncStyles.textSecondary, rncStyles.flexRow, rncStyles.justifyContentCenter]}>
                <Button  onPress={delData} label="Delete Projects" />
                <Button  onPress={MarkAsDone} label="Mark As Done" />
            </View>
        </ScrollView>
    </>
    )
}


// +++++++++++++++++single project++++++++++++