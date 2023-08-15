import { Stack } from 'expo-router';

export default function () {
  return (
    <Stack
      screenOptions={{
        headerTintColor: '#f97316',
        contentStyle: { backgroundColor: 'white' },
        headerShadowVisible: false,
      }}
    />
  );
}
