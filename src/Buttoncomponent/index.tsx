 

 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';


import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,TouchableOpacity
} from 'react-native';


export default function Buttoncomponent(): JSX.Element {

 
  return (
    <TouchableOpacity style={styles.button} >
    <Text style={styles.btnText} >Submit</Text>
  </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
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




const buttonbuider=[
{
    type: "btn",
    touchbtn: "button",
    btnText :"Next",
},


]