import { ActivityIndicator, StatusBar } from "react-native";
import {ThemeProvider} from 'styled-components';

import { Home } from "./src/screens/Home";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";

import {THEMES} from './src/global/thmesGlobal';

export default function App() {

  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={THEMES}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {
        loaded ? <Home /> : <Loading />
      }
    </ThemeProvider>
  );
}

