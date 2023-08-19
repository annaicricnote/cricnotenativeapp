/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import FormBuilder from '../../shared/FormBuilder';
import { TeamcreateFields } from '../../shared/static';
// import Buttoncomponent from "../../shared/Buttoncomponent/index"
import Buttoncomponent from '../../shared/Buttoncomponent';

export default function Createteam({ navigation }: any): JSX.Element {
  const clickcreateteamSBtn = () =>{
   
}

  return (
    <View>
      <View style={styles.whitebg}>
        <FormBuilder fields={TeamcreateFields}  />
        <TouchableOpacity style={styles.button}  >
        <Buttoncomponent buttonName={"Create Team"} onPressChild={clickcreateteamSBtn}/>
        </TouchableOpacity>
      </View></View>

  );
}

const styles = StyleSheet.create({
  header: {
    height: 91,
    backgroundColor: '#FFFF',

  },
  navname: {
    backgroundColor: '#FFFF',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 30,
    fontSize: 18,
    fontWeight: '400',



  },
  whitebg: {
    backgroundColor: '#FFFF',

    borderColor: 'black',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 60,
    fontSize: 18,
    fontWeight: '400',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#6A5BE2',
    padding: 10,
    borderRadius: 10,

  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
  }



});


