import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screens/Signup';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Products from '../Screens/Product';
import SingleProduct from '../Screens/SingleProduct';
import Task from '../Screens/Task';
import CreateTask from '../Screens/CreateTask';
import MyTasks from '../Screens/Task';
import SingleTask from '../Screens/SingleTask';
import Profile from '../Screens/Profile';
// import BackendSignup from '../Screens/BackendSignup';
// import BackendLogin from '../Screens/BackendLogin';
// import ApiRoutes from '../Screens/ApiRoutes';
import CreateProject from '../Screens/CreateProject';
// import ProjectShow from '../Screens/MyProjects';
import Splash from '../Screens/Splash';
import Splash2 from '../Screens/Splash2';
import Splash3 from '../Screens/Splash3';
import Singleproject from '../Screens/SingleProject';
import MyProjects from '../Screens/ProjectShow';
import CreateTeam from '../Screens/Team';
import Team from '../Screens/Team';
import Store from '../redux/Store';
import { Provider } from 'react-redux';
import store from '../redux/Store';



const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        {/* <Stack.Screen name="Backend Signup" component={BackendSignup} /> */}
        {/* <Stack.Screen name="Backend Login" component={BackendLogin} /> */}
        {/* <Stack.Screen name="ApiRoutes" component={ApiRoutes} /> */}
        {/* <Stack.Screen name="Show project" component={ProjectShow} /> */}
        {/* <Stack.Screen name="Single project" component={Singleproject} /> */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="My projects" component={MyProjects} />
        <Stack.Screen name="Create Project" component={CreateProject} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Your Profile" component={Profile} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="Create team" component={Team} />
        {/* <Stack.Screen name="store" component={Store} /> */}
        <Stack.Screen name="MyTasks" component={MyTasks} />
        <Stack.Screen name="Single Task" component={SingleTask} />
        {/* <Stack.Screen name="Create team" component={CreateTeam} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default StackNav;