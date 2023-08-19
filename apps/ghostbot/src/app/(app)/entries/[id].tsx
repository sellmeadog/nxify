import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function () {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: id?.toString() }} />
      <View>
        <Text>{`Hello, ${id}`}</Text>
      </View>
    </>
  );
}
