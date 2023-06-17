
import Frontpage from './src/Pages/FrontPage/index'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from './src/Pages/Profile'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,  
} from 'react-native';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>      
        <Stack.Screen options={{headerShown:false}} name="front" component={Frontpage} />
          <Stack.Screen   name="profile" component={Profile} />        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
