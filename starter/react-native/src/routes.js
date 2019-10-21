import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const RootStack = createStackNavigator(
  {
    Main,
    Product,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: 'white',
    },
  },
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
