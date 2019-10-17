import InitialScreen from '../pages/Authentication/Initial';
import LoginScreen from '../pages/Authentication/Login';
import SignupScreen from '../pages/Authentication/Signup';

import HomeScreen from '../pages/Home';
import NotificationScreen from '../pages/Notifications';

const routes = {
  Initial: {
    screen: InitialScreen,
    navigationOptions: {
      header: null
    },
  },

  Login: {
    screen: LoginScreen
  },

  Signup: {
    screen: SignupScreen
  },

  Home: {
    screen: HomeScreen
  },

  Notifications: {
    screen: NotificationScreen
  },

};

export default routes;
