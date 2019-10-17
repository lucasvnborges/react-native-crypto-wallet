import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Routes from './routes';

const AppNavigator = createStackNavigator(Routes, {
  headerMode: 'none',
  header: null,
  navigationOptions: {
    headerVisible: false,
  },
  initialRouteName: 'Initial'
});

export default createAppContainer(AppNavigator);
