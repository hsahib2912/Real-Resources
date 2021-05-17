import React,{Component, Fragment} from 'react';
import {StyleSheet, Text, View, TextInput,Button } from 'react-native';
import firebaseConfig from '/Users/harkishansingh/Desktop/react/realres/firebase.js';
import 'firebase/firestore';
import * as firebase from 'firebase';

export default class phone_name extends Component {
    constructor(props){
        super(props);
    }
    state = {
        name:"",
        phone:"",
    }
    handleText = (name,phone)=>{
        if(name!=""){
            this.setState({
                name:name,
            });
        }
        if(phone!=""){
            this.setState({
                phone:phone,
            });
        }
    }

    bttnpressed=(name,ph)=>{
       /* const dhb = firebase.firestore();
        dhb.
            collection('Registered Users')
            .add({
                Name: name,
                Phone: ph,
            })
            .then(() => {
                console.log('User added!');
            });*/
        this.props.navigation.navigate('select_city');
    }
    render()
    {
        return(
            <Fragment>
            <View style = {styles.container}>
                <Text style = {styles.txt}>Please enter your name and mobile phone</Text>
            </View>
            
            <TextInput
                style = {styles.inptxt}
                placeholderTextColor = 'grey'
                placeholder="Name"  
                onChangeText = {(name)=>this.handleText(name,"")}
            />  
            <TextInput 
                style = {styles.inptxt}
                maxLength = {10}
                keyboardType = 'numeric'
                placeholderTextColor = 'grey'
                placeholder="Phone Number"  
                onChangeText = {(phone)=>this.handleText("",phone)}
            />  

            <Button
                backgroundColor = 'yellow'
                elevation = {8}
                borderRadius = {10}
                borderWidth = {100}
                title = 'Submit'
                onPress = {()=> this.bttnpressed(this.state.name,this.state.phone)}
                
            />

            
            
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      //flex:1,
      alignItems: 'center',     //for aligning columnwise
      padding : 50,
    },
    txt:{
        fontSize : 30,
        fontWeight : 'bold'
    },
    inptxt:{
        fontSize : 20,
        margin : 20,
        height: 60,
        textAlign :'center',
        textShadowColor : 'red',
        borderColor: '#007AFF',
        borderWidth: 5
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "red",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      }
  });

  