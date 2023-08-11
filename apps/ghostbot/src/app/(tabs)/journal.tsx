import { Link, Tabs } from 'expo-router';
import { FlatList, View } from 'react-native';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';

export default function JournalScreen() {
  return (
    <>
      <Tabs.Screen
        options={{
          title: 'Journal',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcon
              color={color}
              size={25}
              name={
                focused
                  ? 'book-open-page-variant'
                  : 'book-open-page-variant-outline'
              }
            />
          ),
        }}
      />
      <View>
        <FlatList
          data={[
            { id: 1, title: 'Hello World' },
            { id: 2, title: 'Goodbye Cruel World' },
          ]}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View>
              <Link href={`/entries/${item.id}`}>{item.title}</Link>
            </View>
          )}
        />
      </View>
    </>
  );
}
