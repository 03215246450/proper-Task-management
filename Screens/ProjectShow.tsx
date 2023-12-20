// import React, { useEffect, useState } from 'react'
// import { ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native'
// import { GetData } from '../FirebaseMethod.tsx/Firebase'
// import rncStyles from 'rncstyles'
// import IconBtn from '../Components/IconBtn'

// function ProjectShow({ navigation, route }: any) {

//   const [Tasklist, setTaskList] = useState<any>([])
//   const [filter, Setfilter] = useState<any>([])

//   let get = () => {
//     GetData("tasks").then((res: any) => {
//       setTaskList([...res])
//     }).catch((error) => {
//       console.log(error);
//     })
//   }

//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       // Screen was focused
//       get()
//       // Do something
//     });

//     return unsubscribe;
//   }, [])

//   return (
//     <View style={[rncStyles.h100, rncStyles.p2]}>


//       <View>
//         <TextInput
//           onChangeText={(e: any) => {
//             if (e.trim() === '') {
//               // If the search text is empty, reset the filter
//               Setfilter([]);
//             } else {
//               // If the search text is not empty, perform the filtering logic
//               let arr = Tasklist.filter((x: any) => {
//                 return (
//                   x.title.toLowerCase().includes(e.toLowerCase()) ||
//                   x.taskVal.toLowerCase().includes(e.toLowerCase())
//                 );
//               });
//               Setfilter(arr);
//             }
//           }}
//           placeholder="Search project here"
//           placeholderTextColor="black"
//           style={[rncStyles.input, rncStyles.border1, rncStyles.my3]}
//         /></View>



//       <ScrollView>
//         {filter.length > 0 ? filter.map((x: any) =>
//           <View style={[rncStyles.bgWhite, rncStyles.m1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow3]}>
//             <View>
//               <Text style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>{x.title}</Text>
//               <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>{x.taskVal}</Text>
//             </View>
//           </View>) : Tasklist.map((x: any) =>
//             <View style={[rncStyles.bgWhite, rncStyles.m1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow3]}>
//               <View>
//                 <Text numberOfLines={1} style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>{x.title}</Text>
//                 <Text numberOfLines={1} style={[rncStyles.fs5, rncStyles.textSecondary]}>{x.taskVal}</Text>
//                 <View style={[rncStyles.pt1, rncStyles.flexRow]}>
//                   <IconBtn onPress={() => { navigation.navigate("Single Task", x) }} name='info' />
//                   { x.isDone &&
//                   <IconBtn name='done' />
//                   }
//                 </View>
//               </View>
//             </View>)}
//       </ScrollView>
//     </View>
//   )
// }

// export default ProjectShow













// import React, { useState } from 'react';
// import { ScrollView, View, TextInput, ToastAndroid } from 'react-native';
// import rncStyles from 'rncstyles';
// import CDatePicker from '../Components/CDatePicker';
// import { AddDataOrPostData } from '../FirebaseMethod.tsx/Firebase';
// import Button from '../Components/Buttons';

// function ProjectShow() {
//   const [model, setModel] = useState<any>({ title: '', taskVal: '', date: null });


//   let post = () => {
//     AddDataOrPostData("Project" , model).then((res) => {
//       ToastAndroid.show("Project Added Successfully" , ToastAndroid.SHORT)
//       console.log(res);
      
//     }).catch((err) => {
// console.warn(err);

//     })
//   } 

//   return (
//     <ScrollView>
//       <View style={[rncStyles.container, rncStyles.bgLight, rncStyles.p2]}>
//         <TextInput
//           value={model.title}
//           onChangeText={(text) => {setModel({...model, title: text})}}
//           placeholder="Title"
//           placeholderTextColor="black"
//           style={[rncStyles.input, rncStyles.border1]}
//         />
//       </View>
//       <View style={[rncStyles.container, rncStyles.bgLight, rncStyles.p2]}>
//         <TextInput
//           value={model.taskVal}
//           multiline={true}
//           numberOfLines={4}
//           verticalAlign='top'
//           onChangeText={(text) => {setModel({...model, taskVal: text})}}
//           placeholder="Enter project desc"
//           placeholderTextColor="black"
//           style={[rncStyles.input, rncStyles.border1]}
//         />
//       </View>
//       <View style={[rncStyles.py2 ]}>
//         <CDatePicker style={[ rncStyles.textDanger]}
//           value={model.date} 
//           onChange={(date : any) => {setModel({...model, date: date})}}
//           lable = "Select Task Date "
          
//         />
//       </View>

//       <View style={[rncStyles.p2]}>
//            <Button onPress={() => {post()}} label="Save Project" />
//         </View>
//     </ScrollView>
//   );
// }

// export default ProjectShow;












import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { GetData } from '../FirebaseMethod.tsx/Firebase'
import rncStyles from 'rncstyles'
import IconBtn from '../Components/IconBtn'

function MyProjects({ navigation, route }: any) {

  const [Tasklist, setTaskList] = useState<any>([])
  const [filter, Setfilter] = useState<any>([])

  let get = () => {
    GetData("Project").then((res: any) => {
      setTaskList([...res])
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      get()
    });

    return unsubscribe;
  }, [])

  return (
    <View style={[rncStyles.h100, rncStyles.p2]}>


      <View>
        <TextInput
          onChangeText={(e: any) => {
            if (e.trim() === '') {
              // If the search text is empty, reset the filter
              Setfilter([]);
            } else {
              // If the search text is not empty, perform the filtering logic
              let arr = Tasklist.filter((x: any) => {
                return (
                  x.title.toLowerCase().includes(e.toLowerCase()) ||
                  x.taskVal.toLowerCase().includes(e.toLowerCase())
                );
              });
              Setfilter(arr);
            }
          }}
          placeholder="Search Task"
          placeholderTextColor="black"
          style={[rncStyles.input, rncStyles.border1, rncStyles.my3]}
        /></View>



      <ScrollView>
        {filter.length > 0 ? filter.map((x: any) =>
          <View style={[rncStyles.bgWhite, rncStyles.m1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow3]}>
            <View>
              <Text style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>{x.title}</Text>
              <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>{x.taskVal}</Text>
            </View>
          </View>) : Tasklist.map((x: any) =>
            <View style={[rncStyles.bgWhite, rncStyles.m1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow3]}>
              <View>
                <Text numberOfLines={1} style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>{x.title}</Text>
                <Text numberOfLines={1} style={[rncStyles.fs5, rncStyles.textSecondary]}>{x.taskVal}</Text>
                <View style={[rncStyles.pt1, rncStyles.flexRow]}>
                  <IconBtn onPress={() => { navigation.navigate("Single Project", x) }} name='info' />
                  { x.isDone &&
                  <IconBtn name='done' />
                  }
                </View>
              </View>
            </View>)}
      </ScrollView>
    </View>
  )
}

export default MyProjects

// +++++++++++++++++My Projec ++++++++++++++