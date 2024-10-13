import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { ChatContext } from './src/context/ChatContext';

function App(): React.JSX.Element {


  return (
    <ChatContext>
    <Text>Hello world!</Text>

    </ChatContext>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
