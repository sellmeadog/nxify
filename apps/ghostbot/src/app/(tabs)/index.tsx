import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface TodayProps {}

export function Today(props: TodayProps) {
  return (
    <>
      <Tabs.Screen
        options={{
          title: 'Today',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
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

export default Today;
