import { StyleSheet, Text, View } from "react-native";
import Navigation from './navigation'
import { Provider } from 'react-redux'
import {store} from '@/store'

export default function Page() {
  return (
    <Provider store={store}>
      <Navigation />

    </Provider>
  );
}

