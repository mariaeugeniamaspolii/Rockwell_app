import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import Header from '../components/Header';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { LightScheme } from '../src/themes/LightScheme';
import * as Font from 'expo-font';

const fontConfig = {
  LexendRegular: {
    fontFamily: 'LexendRegular'
  },
  LexendBold: {
    fontFamily: 'LexendBold'
  },
  LexendExtraBold: {
    fontFamily: 'LexendExtraBold'
  },
  LexendBlack: {
    fontFamily: 'LexendBlack'
  },
};

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...LightScheme
  },
  fonts: configureFonts({ config: fontConfig })
};

const theme = LightTheme;

const customFonts = {
  LexendRegular: require('../src/fonts/LexendRegular.ttf'),
  LexendBold: require('../src/fonts/LexendBold.ttf'),
  LexendExtraBold: require('../src/fonts/LexendExtraBold.ttf'),
  LexendBlack: require('../src/fonts/LexendBlack.ttf'),
};

export default function HomeLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return (
    <PaperProvider theme={theme}>
      {fontsLoaded ? (
        <>
          <Header />
          <Stack screenOptions={{ animation: 'slide_from_right' }} />
        </>
      ) : null}
    </PaperProvider>
  );
}
