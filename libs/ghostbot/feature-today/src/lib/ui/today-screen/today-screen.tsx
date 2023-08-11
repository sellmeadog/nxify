import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';

export interface TodayScreenProps {}

export function TodayScreen(props: TodayScreenProps) {
  return (
    <>
      <Tabs.Screen
        options={{
          title: 'Today',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcon
              color={color}
              size={24}
              name={focused ? 'comment-multiple' : 'comment-multiple-outline'}
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
