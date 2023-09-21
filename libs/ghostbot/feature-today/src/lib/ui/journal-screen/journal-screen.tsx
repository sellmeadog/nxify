import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { useJournalScreen } from './journal-screen-facade';
import { format } from 'date-fns';

export function JournalScreen() {
  const [data] = useJournalScreen();

  return (
    <FlatList
      data={data}
      keyExtractor={({ _id }) => _id}
      renderItem={({ item }) => (
        <Link href={`/entries/${item._id}`}>
          <View className="flex-row p-4">
            <View className="items-center">
              <Text className="text-xs uppercase">
                {format(item.date, 'MMM')}
              </Text>
              <Text className="text-2xl font-bold">
                {format(item.date, 'dd')}
              </Text>
            </View>
            <View className="shrink pl-4 gap-1">
              <Text numberOfLines={2}>
                {item.events.map(({ text }) => text).join(' ')}
              </Text>
              <Text className="text-[8px] uppercase">
                Total Events: {item.events.length}
              </Text>
            </View>
          </View>
        </Link>
      )}
    />
  );
}
