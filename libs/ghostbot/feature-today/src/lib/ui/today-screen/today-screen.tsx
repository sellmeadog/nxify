import { View, Text, FlatList, TextInput, Pressable } from 'react-native';
import { Tabs } from 'expo-router';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

export interface TodayScreenProps {}

export function TodayScreen(props: TodayScreenProps) {
  const [text, handleChangeText] = useState('');
  const [items, setItems] = useState<
    Array<{ _id: number; timestamp: number; text: string }>
  >([]);

  return (
    <>
      <Tabs.Screen
        options={{
          title: 'Today',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcon
              color={color}
              size={25}
              name={focused ? 'comment-multiple' : 'comment-multiple-outline'}
            />
          ),
        }}
      />
      <FlatList
        className="flex-1"
        data={items}
        keyExtractor={({ _id }) => _id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View className="bg-white rounded-lg shadow-md p-2 absolute w-full bottom-0">
        <View className="p-2">
          <TextInput
            className="p-0 m-0"
            multiline
            placeholder="What's on your mind today?"
            onChangeText={handleChangeText}
            value={text}
          />
        </View>
        <View className="flex-row items-center justify-end px-2">
          <Pressable
            onPress={() => {
              if (text) {
                setItems((data) => [
                  ...data,
                  { _id: Date.now(), timestamp: Date.now(), text },
                ]);
              }

              handleChangeText('');
            }}
            className="bg-orange-500 py-1 px-3 rounded-full"
          >
            <Text className="uppercase text-white text-xs font-bold">Post</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
