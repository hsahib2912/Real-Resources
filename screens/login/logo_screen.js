import React, { Component } from 'react';
import { Image,Button, StyleSheet, Text, View } from 'react-native';


var logo = require('../../assets/heart.png')
export default class logo_screen extends Component {
    constructor(props){
        super(props);
        setInterval(()=>{
          this.props.navigation.navigate('phone_name')
        },1000);
    }
    render()
    {
        return (
        <View style={styles.container}>
            <Image source = {logo}
            style = {{width : 150, height : 150}}></Image>
            <Text>Real Resources</Text>
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

