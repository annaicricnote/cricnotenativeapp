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


export default function Headercomponent(): JSX.Element {

 
  return (
 <View style= {styles.header}>
  <Text style= {styles.navname}>
    
        Profile
     
  </Text>
 </View>
   
  );
}

const styles = StyleSheet.create({
  header:{
      height:91,
      backgroundColor:'#6A5BE2',
   
  },
  navname:{
    color:'white',
    padding:10 ,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop:30,
    fontSize: 18,
    fontWeight: '400',
   
   
    
  }
 
 

});


