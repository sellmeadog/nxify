import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { GhostbotDataProvider } from '@nxify/ghostbot-data-provider';
import { LoginScreen } from '@nxify/ghostbot-feature-admin';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...MaterialCommunityIcons.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const { EXPO_PUBLIC_REALM_APP_ID } = process.env;

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GhostbotDataProvider
      appId={EXPO_PUBLIC_REALM_APP_ID}
      fallback={LoginScreen}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          initialRouteName="(app)"
          screenOptions={{ headerTintColor: '#f97316' }}
        >
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GhostbotDataProvider>
  );
}
