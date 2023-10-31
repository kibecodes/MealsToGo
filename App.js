import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react'
import { ThemeProvider } from 'styled-components/native';
import { initializeApp } from 'firebase/app';

import { useFonts as UseOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as UseLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from "./src/infrastructure/theme";
import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: "AIzaSyDQlVaJ89KnhFJY8mv5Ati_eK0sIQ-Uk0s",
  authDomain: "mealstogo-96a1f.firebaseapp.com",
  projectId: "mealstogo-96a1f",
  storageBucket: "mealstogo-96a1f.appspot.com",
  messagingSenderId: "178224886437",
  appId: "1:178224886437:web:735bd78203adf9020f934c"
};

  const app = initializeApp(firebaseConfig);


export default function App () {

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
        <AuthenticationContextProvider>
          <Navigation/>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
};
