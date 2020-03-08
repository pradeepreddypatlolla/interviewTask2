import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider}from 'mobx-react';
import Store from './store';

import Layout from './routes/rootStack';
 
export default class App extends Component {


  render(){



     

      return (


          <Provider store={Store}>
           <Layout/>
           
       </Provider>
    
       
    
      )

    



  
}
}
