import { ReactNode, useCallback, useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import Realm from 'realm';
import { SafeAreaView } from 'react-native-safe-area-context';

export type AuthenticationCallback = (
  credentials: Realm.Credentials<SimpleObject>
) => Promise<void>;

export type AuthenticationMode = 'login' | 'register';
export type AuthenticationModeCallback = (mode: AuthenticationMode) => void;

export type AuthenticationFormProps = {
  mode?: AuthenticationMode;
  onAuthenticate?: AuthenticationCallback;
  onToggleMode?: AuthenticationModeCallback;
};

export function AuthenticationForm({
  mode = 'login',
  onAuthenticate,
  onToggleMode,
}: AuthenticationFormProps) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleAuthenticate = useCallback(() => {
    if (email && password) {
      onAuthenticate?.(Realm.Credentials.emailPassword(email, password));
    }
  }, [email, onAuthenticate, password]);

  const handleToggleMode = useCallback(() => {
    onToggleMode?.(mode === 'login' ? 'register' : 'login');
  }, [mode, onToggleMode]);

  return (
    <SafeAreaView edges={['bottom']} className="flex-1 justify-between">
      <KeyboardAvoidingView behavior="padding" className="gap-3">
        <View className="border-hairline border-neutral-900 p-3 rounded-md">
          <TextInput
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Email Address"
            autoCapitalize="none"
            autoCorrect={false}
            style={{ fontSize: 16 }}
          />
        </View>
        <View className="border-hairline border-neutral-900 p-3 rounded-md">
          <TextInput
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={{ fontSize: 16 }}
          />
        </View>
        <Pressable
          className={`items-center justify-center p-3 rounded-md ${
            !email || !password ? 'bg-neutral-300' : 'bg-amber-500'
          }`}
          disabled={!email || !password}
          onPress={handleAuthenticate}
        >
          <Text className="font-bold text-base text-white uppercase">
            {mode === 'login' ? 'Login' : 'Register'}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
      <AuthenticationModeToggle mode={mode} onToggle={handleToggleMode} />
    </SafeAreaView>
  );
}

type AuthenticationModeToggleProps = {
  mode: AuthenticationMode;
  onToggle?: (mode: AuthenticationMode) => void;
};

function AuthenticationModeToggle({
  mode,
  onToggle,
}: AuthenticationModeToggleProps) {
  const handleChangeMode = useCallback(() => {
    onToggle?.(mode === 'login' ? 'register' : 'login');
  }, [mode, onToggle]);

  let content: ReactNode;

  if (mode === 'login') {
    content = (
      <>
        <Text className="text-slate-400">Need an account? </Text>
        <Text className="text-amber-500">Register.</Text>
      </>
    );
  } else {
    content = (
      <>
        <Text className="text-slate-400">Already have an account? </Text>
        <Text className="text-amber-500">Login.</Text>
      </>
    );
  }

  return (
    <Pressable
      className="items-center justify-center p-3"
      onPress={handleChangeMode}
    >
      <Text className="font-medium text-base text-slate-400">{content}</Text>
    </Pressable>
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
