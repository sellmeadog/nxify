import { View, Text, TextInput, Pressable } from 'react-native';
import { Link, Tabs } from 'expo-router';
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
          headerRight: ({ tintColor, pressColor, pressOpacity }) => (
            <Link href={'/journal'} asChild>
              <MaterialCommunityIcon
                color={pressColor ?? tintColor}
                size={25}
                name={'calendar-multiselect'}
                style={{ marginHorizontal: 16 }}
              />
            </Link>
          ),
          headerPressColor: 'blue',
          headerTintColor: 'black',
        }}
      />
      <View className="bg-white p-2">
        <View className="p-2">
          <TextInput
            className="p-2 m-0 border-hairline border-slate-500 rounded-md"
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
      <View className="flex-1">
        <JournalEntryTimeline entry={entry} />
      </View>
    </>
  );
}
