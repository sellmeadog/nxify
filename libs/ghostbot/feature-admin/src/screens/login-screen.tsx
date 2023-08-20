import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import {
  AuthenticationCallback,
  AuthenticationForm,
  AuthenticationMode,
} from '../components/authentication-form';
import { useApp } from '@realm/react';
import { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export function LoginScreen() {
  const app = useApp();
  const [mode, handleChangeMode] = useState<AuthenticationMode>('login');

  const handleAuthenticate: AuthenticationCallback = useCallback(
    async (credentials) => {
      if (mode === 'register') {
        await app.emailPasswordAuth.registerUser({
          email: credentials.payload.email as string,
          password: credentials.payload.password as string,
        });
      }
      await app.logIn(credentials);
    },
    [app, mode]
  );

  return (
    <>
      <StatusBar style="light" animated />

      <Image
        contentFit="cover"
        source={require('../../assets/background1.jpeg')}
      >
        <View className="flex">
          <View className="basis-1/3 items-start justify-end p-6">
            <Text className="text-5xl text-neutral-50 font-medium">Login</Text>
            <Text className="text-base text-neutral-200">
              Sign in to your account.
            </Text>
          </View>
          <View className="basis-2/3 bg-white rounded-t justify-center p-6">
            <AuthenticationForm
              mode={mode}
              onAuthenticate={handleAuthenticate}
              onToggleMode={handleChangeMode}
            />
          </View>
        </View>
      </Image>
    </>
  );
}
