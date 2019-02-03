import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProductsScreen from '../Containers/ProductsScreen';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen,
      navigationOptions: () => ({
        title: 'Поиск по штрих-коду',
      }),
    },
    ProductsScreen: {
      screen: ProductsScreen,
      navigationOptions: () => ({
        title: 'Search results',
      }),
    },
  },
  {
    // Default config for all screens
    // headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
