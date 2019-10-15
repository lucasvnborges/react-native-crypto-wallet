import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Routes from './routes';

const AppNavigator = createStackNavigator(Routes);

export default createAppContainer(AppNavigator);