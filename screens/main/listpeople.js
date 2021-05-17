import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default class listpeople extends Component {
    constructor(props){
        super(props);
    }
    
    
    render()
    {
        const {navigation} = this.props;
        const realid = navigation.getParam('text','nothing');
        if(realid == 'oxygen'){
            return (
                <View style={styles.container}>
                    <Text>Getting Oxygen</Text>
                </View>        
            );
        }
        else if(realid == 'icu'){
            return (
                <View style={styles.container}>
                    <Text>Getting ICU bed information</Text>
                </View>        
            );
        }
        else if(realid == 'rem'){
            return (
                <View style={styles.container}>
                    <Text>Getting remdesvir information</Text>
                </View>        
            );
        }
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });