import * as React from 'react';
import {Logo} from '@/components';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@/context/Theme/ThemeContext';
import {Button} from '@/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const StartScreen = () => {
  const {theme, colorScheme} = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[{backgroundColor: theme[colorScheme].dark}, styles.container]}>
      <Logo />
      <View style={{marginTop: 20}} />
      <Button onPress={() => {}} type="primary" fullWidth>
        Login
      </Button>
      <Text style={[styles.text, {color: theme[colorScheme].textPrimary}]}>
        Or
      </Text>
      <Button onPress={() => {}} type="primary" fullWidth>
        Register
      </Button>
      <Button
        onPress={() => {}}
        type="primary"
        fullWidth
        style={{marginTop: 100}}>
        Sign in via Google
      </Button>
      <View style={{position: 'absolute', bottom: insets.bottom}}>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
          <Text style={[styles.text, {color: theme[colorScheme].textPrimary}]}>
            About app
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 100,
    flex: 1,
  },
  text: {
    marginVertical: 10,
    fontSize: 24,
    fontFamily: 'Jersey20-Regular',
  },
});
