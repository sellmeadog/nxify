import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';

export interface TodayScreenProps {}

export function TodayScreen(props: TodayScreenProps) {
  return (
    <>
      <Tabs.Screen
        options={{
          title: 'Today',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeIcon
              color={color}
              size={24}
              name={focused ? 'comments' : 'comments-o'}
            />
          ),
        }}
      />
      <View>
        <Text>Welcome to today!</Text>
      </View>
    </>
  );
}
