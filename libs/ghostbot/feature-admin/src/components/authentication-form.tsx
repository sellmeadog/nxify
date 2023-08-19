import { useCallback, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Realm from 'realm';

export type AuthenticationCallback = (
  credentials: Realm.Credentials<SimpleObject>
) => Promise<void>;

export type AuthenticationMode = 'login' | 'register';
export type AuthenticationModeCallback = (mode: AuthenticationMode) => void;

export type AuthenticationFormProps = {
  mode?: AuthenticationMode;
  onAuthenticate?: AuthenticationCallback;
  onChangeMode?: AuthenticationModeCallback;
};

export function AuthenticationForm({
  mode = 'login',
  onAuthenticate,
  onChangeMode,
}: AuthenticationFormProps) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  // const [mode, setMode] = useState<AuthenticationMode>(initialMode);

  const handleAuthenticate = useCallback(() => {
    if (email && password) {
      onAuthenticate?.(Realm.Credentials.emailPassword(email, password));
    }
  }, [email, onAuthenticate, password]);

  const handleChangeMode = useCallback(() => {
    onChangeMode?.(mode === 'login' ? 'register' : 'login');
  }, [mode, onChangeMode]);

  return (
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
      <Pressable
        className={`items-center justify-center p-3 rounded-md ${
          !email || !password ? 'bg-neutral-300' : 'bg-amber-500'
        }`}
        disabled={!email || !password}
        onPress={handleAuthenticate}
        // onPress={async () => {
        //   if (email && password) {
        //     if (mode === 'register') {
        //       await app.emailPasswordAuth.registerUser({ email, password });
        //     }
        //     await app.logIn(Realm.Credentials.emailPassword(email, password));
        //   }
        // }}
      >
        <Text className="font-bold text-white uppercase">
          {mode === 'login' ? 'Login' : 'Register'}
        </Text>
      </Pressable>
      <Pressable
        className="items-center justify-center p-3"
        onPress={handleChangeMode}
      >
        <Text className="text-blue-300">
          {mode === 'register'
            ? 'Already have an account? Log in.'
            : 'Need an account? Register.'}
        </Text>
      </Pressable>
    </View>
  );
}
// function LoginScreen() {
//   const app = useApp();
//   const [email, setEmail] = useState<string>();
//   const [password, setPassword] = useState<string>();
//   const [mode, setMode] = useState<'login' | 'register'>('register');

//   return (
//     <View className="flex-1 justify-center">
//       <View className="w-2/3 self-center gap-2">
//         <Text>{mode === 'login' ? 'LOGIN' : 'REGISTER'}</Text>
//         <View className="border-hairline border-slate-500 p-2 rounded-md">
//           <TextInput
//             keyboardType="email-address"
//             onChangeText={setEmail}
//             placeholder="Email Address"
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//         </View>
//         <View className="border-hairline border-slate-500 p-2 rounded-md">
//           <TextInput
//             onChangeText={setPassword}
//             placeholder="Password"
//             secureTextEntry
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//         </View>
//         <Button
//           disabled={!email || !password}
//           onPress={async () => {
//             if (email && password) {
//               if (mode === 'register') {
//                 await app.emailPasswordAuth.registerUser({ email, password });
//               }

//               await app.logIn(Realm.Credentials.emailPassword(email, password));
//             }
//           }}
//           title="Login"
//         />
//         <Pressable
//           onPress={() =>
//             setMode((current) => (current === 'login' ? 'register' : 'login'))
//           }
//         >
//           <Text className="text-blue-300">
//             {mode === 'register'
//               ? 'Already have an account? Log in.'
//               : 'Create Account'}
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }
