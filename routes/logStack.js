import { createStackNavigator } from "react-navigation-stack";

import SignUp from '../screens/signup';
import SignIn from "../screens/login";

const screens={
     
  SignUp: {
    screen: SignUp,
    navigationOptions:{
      headerShown:false
  }
  },
    SignIn: {
      screen: SignIn,
      navigationOptions:{
        headerShown:false
    }
    }
  }

  const SignedOut=createStackNavigator(screens)
export default SignedOut;