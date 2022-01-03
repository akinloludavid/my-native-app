import { StyleSheet, Text, SafeAreaView,StatusBar, Button, View, Platform } from 'react-native';
import ViewImage from './app/screens/ViewImage';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  
  return (
      // <WelcomeScreen/>
      <ViewImage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
