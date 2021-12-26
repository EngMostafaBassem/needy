import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import ListingDetailsScreen from './Screens/ListingDetailsScreen';
import ViewImageScreen from './Screens/ViewImageScreen';
import ListingScreen from './Screens/ListingScreen'
import AccountScreen from './Screens/AccountScreen'
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ListingEditingScreen from './Screens/ListingEditingScreen';
export default function App() {
  return (
   <ListingEditingScreen/>
  );
}


