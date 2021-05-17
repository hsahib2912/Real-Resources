import React, { Component } from 'react';
import {Image, Button, StyleSheet, Text, View } from 'react-native';
import {Card,CardItem} from 'native-base'


var delhi = require('../../assets/delhi.png')
var mumbai = require('../../assets/mumbai.png')
export default class select_city extends Component {
    constructor(props){
        super(props);
    }
    cardSelected(city){
      if(city == 'delhi'){
        this.props.navigation.navigate('res')
      }
    }

    render()
    {
        return (
          <View style = {styles.container}>
            <Text style = {styles.txt}>Select your city</Text>
            <CardItem 
              button={true}
              onPress={() => {this.cardSelected('delhi')}}
              style={{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>
              <Image  source={delhi} style={{flex:1,resizeMode: 'cover',height: 175}} />
              </CardItem>
              <CardItem 
                button={true}
                onPress={() => {this.cardSelected('delhi')}}
                style={{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>
                <Image  source={delhi} style={{flex:1,resizeMode: 'cover',height: 175}} />
              </CardItem>
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
    txt:{
      fontSize : 30,
      fontWeight : 'bold'
  },
  });