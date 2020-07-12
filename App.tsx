import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DevNavScreen from './screens/DevNavScreen';
import MapMasterScreen from './screens/MapMasterScreen';
import SchedulerScreen from './screens/SchedulerScreen';

export type RootStackParamList = {
  DevNav: {};
  MapMaster: {};
  Scheduler: {};
};

const RootStack = createStackNavigator<RootStackParamList>();
const App: () => React.ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="DevNav" component={DevNavScreen} />
          <RootStack.Screen name="MapMaster" component={MapMasterScreen} />
          <RootStack.Screen name="Scheduler" component={SchedulerScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
