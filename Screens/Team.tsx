

// import React from 'react'
// import { Image, ScrollView, TextInput, Text, View, TouchableOpacityBase, TouchableOpacity } from 'react-native'
// import { useState } from 'react'
// import rncStyles from 'rncstyles'
// import Button from '../Components/Buttons'

// function Team() {

//   const [model, setModel] = useState<any>({})

//   return (
//     <>
//       <ScrollView>

//         <View
//           style={rncStyles.flexCenter}>
//           <Image
//             resizeMode='contain'
//             style={[
//               rncStyles.roundedPill,
//               { width: 140, height: 140 }
//             ]}
//             source={{
//               uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlHxQpUqAJf9K6P6uxA-pBGaBddVEe0L4tg&usqp=CAU'
//             }}
//           />
//         </View>
//         <Text style={[rncStyles.textCenter, rncStyles.py3, rncStyles.fs3 , rncStyles.textBold,]} >
//           Create Your Team
//         </Text>
//         <View style={rncStyles.pb1}>
//           <Text style={[rncStyles.p1]}>Team Name</Text>
//           <TextInput
//             value={model.password}
//             onChangeText={(e) => setModel({ ...model, password: e })}
//             style={[
//               rncStyles.input,
//               rncStyles.bgWhite,
//               rncStyles.rounded,
//               rncStyles.border1,
//               rncStyles.p2,
//               rncStyles.borderPrimary,
//             ]}
//             placeholder="Enter Team Name"
//             placeholderTextColor={rncStyles.textSecondary.color}
//           />

//         </View>

//         <View style={[rncStyles.my1]}>
//           <TouchableOpacity>
//             <View style={[rncStyles.p2 , rncStyles.border2 , rncStyles.shadow2]}>
//               <Button  label="Add Members" />
//             </View>
//           </TouchableOpacity>
//           <View style={[rncStyles.py2, rncStyles.textSecondary, rncStyles.flexRow, rncStyles.justifyContentAround,]}>
//             <Button label="Private " />
//             <Button label="Public" />
//             <Button label="Secrete" />
//           </View>
//         </View>
//         <TouchableOpacity
//          >
//             <Button 
//     //    style={width : 50, height : 50 }
//        label="Private " />
//           </TouchableOpacity>

//       </ScrollView>
//     </>
//   )
// }

// export default Team





// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import Button from '../Components/Buttons';
// import rncStyles from 'rncstyles';


// const Team = ({ navigation }):any => {
//   const [teamName, setTeamName] = useState('');
//   const [teamDescription, setTeamDescription] = useState('');
//   const dispatch = useDispatch();

//   const teams = useSelector((state:any) => state.teams);




//   const createTeam = () => {
//     // Dispatch the CREATE_TEAM action with the team name as payload
//     dispatch({ type: 'CREATE_TEAM', payload: {teamName,teamDescription} });
//     navigation.navigate('Create team', { teamName });
//     console.log(teamName, teamDescription);
    

//   };

//   return (
//     <View style={[]}>
//       <Text style={[rncStyles.m1, rncStyles.p1, rncStyles.fs1, rncStyles.textBlack]}>Task Management App</Text>
//       <TextInput
//         placeholder="Enter Team Name"
//         style={[rncStyles.input, rncStyles.border1 ,rncStyles.p1, rncStyles.mb2]}
//         placeholderTextColor={rncStyles.textSecondary.color}
//         value={teamName}
//         onChangeText={(text) => setTeamName(text)}
//       />


// <TextInput
//         placeholder="Team description"
//         style={[rncStyles.input, rncStyles.border1 ,rncStyles.p1, rncStyles.mb2]}
//         placeholderTextColor={rncStyles.textSecondary.color}
//         value={teamDescription}
//         onChangeText={(text) => setTeamDescription(text)}
//       />


//     <Button onPress={createTeam} label="Create" style={[rncStyles.w50, rncStyles.m1]} />

//     <Text style={[rncStyles.m1, rncStyles.p1, rncStyles.fs1, rncStyles.textBlack]}>Teams</Text>
//       {teams.length > 0 ? (
//         <FlatList
//           data={teams}
//           keyExtractor={(item) => item.name}
//           renderItem={({ item }) => (
//             <View style={[rncStyles.border1, rncStyles.p2, rncStyles.mb2]}>
//               <Text style={[rncStyles.fs1, rncStyles.textBlack]}>{item.name}</Text>
//               <Text>{item.teamDescription}</Text>
//             </View>
//           )}
//         />
//       ) : (
//         <Text>No teams available</Text>
//       )}



//     </View>
//   );
// };

// export default Team;












// Team.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/Buttons';
import rncStyles from 'rncstyles';

const Team = ({ navigation }): any => {
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');
  const dispatch = useDispatch();

  const teams = useSelector((state: any) => state.teams);

  const createTeam = () => {
    dispatch({ type: 'CREATE_TEAM', payload: { teamName, teamDescription } });
    navigation.navigate('Create team');
    console.log(teamName, teamDescription);
  };

  return (
    <View style={rncStyles.container}>
      <Text style={[rncStyles.heading, rncStyles.m1]}>Task Management App</Text>
      
      <TextInput
        placeholder="Enter Team Name"
        style={rncStyles.input}
        placeholderTextColor={rncStyles.textSecondary.color}
        value={teamName}
        onChangeText={(text) => setTeamName(text)}
      />

      <TextInput
        placeholder="Team Description"
        style={rncStyles.input}
        placeholderTextColor={rncStyles.textSecondary.color}
        value={teamDescription}
        onChangeText={(text) => setTeamDescription(text)}
      />

      <Button onPress={createTeam} label="Create" style={rncStyles.button} />

      <Text style={[rncStyles.heading, rncStyles.m1]}>Teams</Text>
      {teams.length > 0 ? (
        <FlatList
          data={teams}
          keyExtractor={(item) => item.teamName}
          renderItem={({ item }) => (
            <View style={[rncStyles.border1, rncStyles.p2, rncStyles.mb2]}>
              <Text style={[rncStyles.fs1, rncStyles.textBlack]}>{item.teamName}</Text>
              <Text>{item.teamDescription}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No teams available</Text>
      )}
    </View>
  );
};

export default Team;
