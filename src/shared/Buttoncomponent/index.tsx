

/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
*/

import React, { useState } from 'react';
import {  
  StyleSheet,
  Text,
   TouchableOpacity
} from 'react-native';

export default function Buttoncomponent({...props}): JSX.Element {


  return (
    <TouchableOpacity style={styles.button} onPress={props.onPressChild}>
      <Text style={styles.btnText} >{props.buttonName}</Text>
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
