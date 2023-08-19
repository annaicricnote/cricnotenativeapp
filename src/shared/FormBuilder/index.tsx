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
  TextInput, TouchableOpacity
} from 'react-native';


function FormBuilder({...props}): JSX.Element {
  const { fields, onChangeInput} = props;

  return (
    fields && fields.map((item:any,index:number)=>{
      return <View>
      <Text style =
      {styles.label}>{item.label}</Text>
      
      { item.type === "text" ?  <View style={styles.inputBox}>
      <TextInput
        placeholder={item.placeholder}
        onChange={onChangeInput}        
      />
      </View> : null }
      </View>
    })
    
  );
}

const styles = StyleSheet.create({

  label:{

  },
  inputBox: {
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#6A5BE2',
  },

});

export default FormBuilder;
