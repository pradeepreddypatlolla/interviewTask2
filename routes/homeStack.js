import {createStackNavigator} from 'react-navigation-stack';

import GameScreen from '../screens/gameScreen';
import ProfileScreen from '../screens/profileScreen';

const screens={
    Game:{screen:GameScreen,
          navigationOptions:{
              headerShown:false
          }   },
    Profile:{screen:ProfileScreen},

}

const SignedIn=createStackNavigator(screens);

export default SignedIn;