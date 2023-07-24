import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screens';

import { ThemeProvider } from 'styled-components/native';
import { theme } from "./src/infrastructure/theme";
import { useFonts as UseOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as UseLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
  const [oswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = UseLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen/>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}


