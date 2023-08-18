import { AppProvider, RealmProvider, UserProvider, useApp } from '@realm/react';
import { JournalEntry, JournalEntryItem } from '@nxify/ghostbot-data-model';
import { PropsWithChildren, useState } from 'react';
import { OpenRealmBehaviorType, OpenRealmTimeOutBehavior } from 'realm';
import { Button, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export type GhostbotDataProviderProps = PropsWithChildren<
  Omit<Realm.Configuration, 'schema' | 'sync'> & { appId: string }
>;

export function GhostbotDataProvider({
  appId,
  children,
  ...rest
}: GhostbotDataProviderProps) {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={LoginScreen}>
        <RealmProvider
          schema={[JournalEntry, JournalEntryItem]}
          sync={{
            flexible: true,
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
              timeOut: 1000,
              timeOutBehavior: OpenRealmTimeOutBehavior.OpenLocalRealm,
            },
            newRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
              timeOut: 1000,
              timeOutBehavior: OpenRealmTimeOutBehavior.ThrowException,
            },
            onError: (_, error) => console.log(error),
          }}
          {...rest}
        >
          {children}
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}

function LoginScreen() {
  const app = useApp();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [mode, setMode] = useState<'login' | 'register'>('register');

  return (
    <View className="flex-1 justify-center">
      <View className="w-2/3 self-center gap-2">
        <Text>{mode === 'login' ? 'LOGIN' : 'REGISTER'}</Text>
        <View className="border-hairline border-slate-500 p-2 rounded-md">
          <TextInput
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Email Address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View className="border-hairline border-slate-500 p-2 rounded-md">
          <TextInput
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <Button
          disabled={!email || !password}
          onPress={async () => {
            if (email && password) {
              if (mode === 'register') {
                await app.emailPasswordAuth.registerUser({ email, password });
              }

              await app.logIn(Realm.Credentials.emailPassword(email, password));
            }
          }}
          title="Login"
        />
        <Pressable
          onPress={() =>
            setMode((current) => (current === 'login' ? 'register' : 'login'))
          }
        >
          <Text className="text-blue-300">
            {mode === 'register'
              ? 'Already have an account? Log in.'
              : 'Create Account'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
