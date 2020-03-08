import React, { Component } from 'react'
import { Text, View, Button ,TextInput} from 'react-native'
import Firebase from 'firebase';
import {inject,observer} from 'mobx-react';
 class SignIn extends Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:"",
      signedIn:false
    }
  }

  
  render() {
      const func=()=>{
        console.log("hello")

        var firebaseConfig = {
          apiKey: "AIzaSyDHqqrW-LBpb2kK6HwQDsWSwPt999ynQCc",
          authDomain: "interview-task-d3174.firebaseapp.com",
          databaseURL: "https://interview-task-d3174.firebaseio.com",
          projectId: "interview-task-d3174",
          storageBucket: "interview-task-d3174.appspot.com",
          messagingSenderId: "589375190524",
          appId: "1:589375190524:web:803cd49bcd4c8deb62ee79",
          measurementId: "G-NERXB2T29T"
        };
        
        if (!Firebase.apps.length) {
          Firebase.initializeApp(firebaseConfig);
       }

       Firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>
          this.props.navigation.navigate('SignedIn')   ).catch(error =>alert(error.code))










      }
        const set=(val)=>{
        let x=this.state;
        x.email=val;
        this.setState(x);

        this.props.store.addUserName(val);
      }
      const set1=(val)=>{
        let x=this.state;
        x.password=val;
        this.setState(x);
      }

      let {email,password}=this.state;

    return (
      <View style={{paddingLeft:40,paddingTop:200,width:"80%"}}>
        
        <TextInput style={{borderWidth:1,margin:2,width:"100%"}} placeholder="EMAIL" onChangeText={email=>set(email)}></TextInput>
        <TextInput style={{borderWidth:1,margin:2,width:"100%"}} placeholder="PASSWORD" onChangeText={password=>set1(password)}></TextInput>
       
        <Button  title="Login"  onPress={()=>func()} />
       
      </View>
    )
  }
}
export default inject('store')(observer(SignIn));