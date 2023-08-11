import { View, Text, TextInput, Pressable } from 'react-native';
import { Tabs } from 'expo-router';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTodayScreen } from './today-screen.facade';
import { JournalEntryTimeline } from '@nxify/ghostbot-shared-ui-journal';

export interface TodayScreenProps {}

export function TodayScreen(props: TodayScreenProps) {
  const [{ canPost, entry, entryText }, handleChangeText, handlePress] =
    useTodayScreen();

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
      <JournalEntryTimeline entry={entry} />

      <View className="bg-white rounded-lg shadow-md p-2 absolute w-full bottom-0">
        <View className="p-2">
          <TextInput
            className="p-0 m-0"
            multiline
            placeholder="What's on your mind today?"
            onChangeText={handleChangeText}
            value={entryText}
          />
        </View>
        <View className="flex-row items-center justify-end px-2">
          <Pressable
            disabled={!canPost}
            onPress={handlePress}
            className={`${
              canPost ? 'bg-orange-500' : 'bg-slate-400'
            } py-1 px-3 rounded-full`}
          >
            <Text className="uppercase text-white text-xs font-bold">Post</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
