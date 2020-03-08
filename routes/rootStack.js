import {

    
    createSwitchNavigator,
    createAppContainer
  } from "react-navigation";
  import SignedOut from './logStack';
  import SignedIn from './homeStack';
  
  
  const screens=
    {

      SignedOut: {
        screen: SignedOut
      },
      SignedIn: {
        screen: SignedIn
      }
    }

  

 const Layout=createSwitchNavigator(screens);
 export default createAppContainer(Layout);
