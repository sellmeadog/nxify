import { Link, Stack } from 'expo-router';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTodayScreen } from './today-screen.facade';
import {
  JournalEntryBottomSheet,
  JournalEntryTimeline,
} from '@nxify/ghostbot-shared-ui-journal';

export interface TodayScreenProps {}

export function TodayScreen(props: TodayScreenProps) {
  const [{ canPost, entries, entryText }, handleChangeText, handlePress] =
    useTodayScreen();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Today',
          headerRight: ({ tintColor }) => (
            <Link href={'/journal'} asChild>
              <MaterialCommunityIcon
                color={tintColor}
                size={25}
                name={'calendar-multiselect'}
                style={{ marginHorizontal: 16 }}
              />
            </Link>
          ),
          headerTintColor: '#f97316',
          headerTitleStyle: { color: 'black' },
          headerShadowVisible: false,
        }}
      />
      <JournalEntryTimeline entries={entries} />
      <JournalEntryBottomSheet
        canPost={canPost}
        entryText={entryText}
        onEntryTextChange={handleChangeText}
        onPost={handlePress}
      />
    </>
  );
}
