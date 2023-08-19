/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import  FormBuilder  from "../../shared/FormBuilder/index"
import { LoginFields } from "../../shared/static/index"
import Buttoncomponent from "../../shared/Buttoncomponent/index"
import Config from "react-native-config";
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,  
} from 'react-native';


function Frontpage({navigation}:any): JSX.Element {
  const [values, setValues] = useState({});
  const onBtnClick = () =>{
      navigation.navigate("profile")
  }
  
const onChangeInput = (e: any) => {
  const name = e.target.name;
  const value = e.target.value;
  setValues({ ...values, [name]: value })
}

  return (
    <ScrollView>
    <View style={styles.maincontainer}>
      <Text style={styles.container}>cricnote {Config.BASEURL} </Text>
      <View style={styles.whitebg}>
        <FormBuilder fields={LoginFields} onChangeInput={onChangeInput}/> 
        <Buttoncomponent buttonName={"Submit"} onPressChild={onBtnClick}/>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
    backgroundColor: '#6A5BE2',   
    justifyContent:'space-evenly',
  },
  container: {   
    flex:1,
    fontFamily: 'Roboto Flex',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 35.16,
    textAlignVertical: 'center',
    color: 'white',
    height:340,
  },
  whitebg: {
    flex:2,
    borderTopLeftRadius: 100,
    backgroundColor: '#FFFF',    
    borderColor: 'black',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 110,
    fontSize: 18,
    fontWeight: '400',
    height:340,
  },
  label: {

  },
  inputBox: {

    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#6A5BE2',
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

export default Frontpage;
