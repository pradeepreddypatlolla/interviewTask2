import React, { Component } from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import {inject, observer } from 'mobx-react';
import { FlatList } from 'react-native-gesture-handler';
import Firebase from 'firebase';
class ProfileScreen extends Component{




    render(){
        return(
            <View>
                <Text>WELCOME {this.props.store.userName} </Text>
                <Text>Games Played:{this.props.store.gameCount}</Text>
                <Text>Games Won:{this.props.store.gamesWon}</Text>
                <Text>Games Lost:{this.props.store.gamesLost}</Text>
                <Text>History </Text>
                <FlatList
                data={this.props.store.history}
                keyExtractor={item=>String(Math.random())}
                renderItem={({item})=><Text>{item}</Text>}
                />
                
                <Button title="LOGOUT" onPress={()=>Firebase.auth().signOut().then(()=>this.props.navigation.navigate('SignedOut'))} />
                </View>
        )
    }
}
export default inject('store')(observer(ProfileScreen));