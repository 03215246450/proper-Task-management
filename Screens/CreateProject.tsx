// import React from 'react'
// import { Text, View } from 'react-native'

// const CreateProject = () => {
//   return (
//   <View>
//     <Text>This is create project</Text>
//   </View>
//     )

// }

// export default CreateProject




import React, { useState } from 'react';
import { ScrollView, View, TextInput, ToastAndroid } from 'react-native';
import rncStyles from 'rncstyles';
import CDatePicker from '../Components/CDatePicker';
import { AddDataOrPostData } from '../FirebaseMethod.tsx/Firebase';
import Button from '../Components/Buttons';

function CreateProject() {
  const [model, setModel] = useState<any>({ title: '', taskVal: '', date: null });


  let post = () => {
    AddDataOrPostData("tasks" , model).then((res) => {
      ToastAndroid.show("Project added Successfully" , ToastAndroid.SHORT)
      console.log(res);
      
    }).catch((err) => {
console.warn(err);

    })
  } 

  return (
    <ScrollView>
      <View style={[rncStyles.container, rncStyles.bgLight, rncStyles.p2]}>
        <TextInput
          value={model.title}
          onChangeText={(text) => {setModel({...model, title: text})}}
          placeholder="Title"
          placeholderTextColor="black"
          style={[rncStyles.input, rncStyles.border1]}
        />
      </View>
      <View style={[rncStyles.container, rncStyles.bgLight, rncStyles.p2]}>
        <TextInput
          value={model.taskVal}
          multiline={true}
          numberOfLines={4}
          verticalAlign='top'
          onChangeText={(text) => {setModel({...model, taskVal: text})}}
          placeholder="Add projects here"
          placeholderTextColor="black"
          style={[rncStyles.input, rncStyles.border1]}
        />
      </View>
      <View style={[rncStyles.py2 ]}>
        <CDatePicker style={[ rncStyles.textDanger]}
          value={model.date} 
          onChange={(date : any) => {setModel({...model, date: date})}}
          lable = "Select project Date "
          
        />
      </View>

      <View style={[rncStyles.p2]}>
           <Button onPress={() => {post()}} label="Add" />
        </View>
    </ScrollView>
  );
}

export default CreateProject;
