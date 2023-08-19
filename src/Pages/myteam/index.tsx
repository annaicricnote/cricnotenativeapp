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
  TouchableOpacity,

} from 'react-native';

import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';
// import FormBuilder from '../../shared/FormBuilder';
import Buttoncomponent from '../../shared/Buttoncomponent';

export default function Myteam({ navigation }: any): JSX.Element {
  // const [isSelected, setSelection] = useState(false);
  const [check1, setCheck1] = useState(false);
  const clickcreateteamBtn = () =>{
    navigation.navigate("create team")
    console.log("gghhh")
}
const clicknextBtn = () =>{

}

  return (
    <View>
      <View style={styles.whitebg}>
        {/* <FormBuilder fields={Profileinfo} /> */}
        <View style={styles.buttonContainer}  >
        <Buttoncomponent buttonName={"Create Team"} onPressChild={clickcreateteamBtn}/>
        <Buttoncomponent buttonName={"Start Match"} onPressChild={clicknextBtn}/>
        </View>

        <CheckBox
          center
          title="Click Here"
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />

        <Text style={styles.label}>will add the team or player while Playing</Text>

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

  buttonContainer: {
    
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
  },
  btnText1: {
    color: '#FFF',
    textAlign: 'center',
  },

  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },



});


