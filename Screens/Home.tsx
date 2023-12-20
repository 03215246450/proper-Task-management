import { Text, View } from "react-native";
import rncStyles from 'rncstyles';
import Button from "../Components/Buttons";
import IconBtn from "../Components/IconBtn";

export default function Home({ navigation, route }: any) {
  const { user } = route.params || {}; // Access user information from route.params

  return (
    <>
      <View style={[rncStyles.flexRow, rncStyles.justifyContentEnd , rncStyles.p1]}>
        {user ? (
          <>
          <Text style={[rncStyles.textBlack, rncStyles.textBold, rncStyles.fs2, rncStyles.py1]}>
            {user.fullName} {/* Replace with the actual field containing the username */}
          </Text>
          <IconBtn onPress={() => { navigation.navigate("Your Profile" , {user})}} size={35} name="handshake" />
          </>

        ) : (
          <IconBtn onPress={() => { navigation.navigate("Login")}} size={35} name="person" />
        )}
      </View>

      <View>
        <Text style={[rncStyles.textBlack, rncStyles.textCenter, rncStyles.py3, rncStyles.textBold, rncStyles.fs2]}>
          Task Management App
        </Text>
      </View>
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("CreateTask") }} label="Add Task" />
      </View>
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("MyTasks") }} label="My Tasks" />
      </View>
      {/* <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("Create Project") }} label="Projects +" />
      </View>
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("My projects") }} label="MY projects" /> */}
      {/* </View> */}
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("Create team") }} label="Create Team" />
      </View>
      {/* <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("Show teams") }} label="Show teams" />
      </View> */}
    </>
  );
}
