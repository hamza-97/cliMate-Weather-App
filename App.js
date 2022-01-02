import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Dimensions} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerScreen from './src/components/DrawerScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import Start from './src/screens/startstack/Start';

const SCREEN_WIDTH = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();

const DrawerStack = ({navigation, route}) => {
  return (
    <Drawer.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        drawerStyle: {
          width: SCREEN_WIDTH,
        },
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen
        name="StartScreen"
        component={Start}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default class MainApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <PaperProvider>
          <DrawerStack />
        </PaperProvider>
      </NavigationContainer>
    );
  }
}
