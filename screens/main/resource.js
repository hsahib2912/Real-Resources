import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class resource extends Component {
    constructor(props){
        super(props);
    }
    render()
    {
        return (
        <View style={styles.container}>
            <Button
            id = 'oxygen'
            title = 'Oxygen'
            onPress = {()=>this.props.navigation.navigate('listpeople',{
                text : 'oxygen'
            })}
            />
            <Button
            id = 'icu'
            title = 'ICU beds'
            onPress = {()=>this.props.navigation.navigate('listpeople',{
                text : 'icu'
            })}
            />
            <Button
            id = 'rem'
            title = 'Remdesvir'
            onPress = {()=>this.props.navigation.navigate('listpeople',{
                text : 'rem'
            })}
            />
            <Button
            id = 'rem'
            title = 'Back'
            onPress = {()=>this.props.navigation.navigate('select_city',{
                text : 'rem'
            })}
            />
            <StatusBar style="auto" />
        </View>
        );
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