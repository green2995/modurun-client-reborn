import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React.ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>INITIALIZED</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
