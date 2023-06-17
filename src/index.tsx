/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import  FormBuilder  from "./FormBuilder/index"
import { LoginFields } from "./static/index"



import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput, TouchableOpacity
} from 'react-native';


function Frontpage({navigation}:any): JSX.Element {

  const [text, setText] = useState('');
  
  return (

    <ScrollView style={styles.maincontainer}>
      <Text style={styles.container}>cricnote</Text>

      <View style={styles.whitebg}>
      <FormBuilder fields={LoginFields} />
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Home")}>
          <Text style={styles.btnText} >Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#6A5BE2',
  },
  container: {
    height: 360,
    fontFamily: 'Roboto Flex',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 35.16,
    textAlignVertical: 'center',
    color: 'white',

  },
  whitebg: {
    borderTopLeftRadius: 100,
    backgroundColor: '#FFFF',
    height: 322,
    borderColor: 'black',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 110,
    fontSize: 18,
    fontWeight: '400',
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
