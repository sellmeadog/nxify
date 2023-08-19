import { View } from 'react-native';
import {
  AuthenticationCallback,
  AuthenticationForm,
  AuthenticationMode,
} from '../components/authentication-form';
import { useApp } from '@realm/react';
import { useCallback, useState } from 'react';

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
    <View className="flex-1 justify-center">
      <AuthenticationForm
        mode={mode}
        onAuthenticate={handleAuthenticate}
        onChangeMode={handleChangeMode}
      />
    </View>
  );
}
