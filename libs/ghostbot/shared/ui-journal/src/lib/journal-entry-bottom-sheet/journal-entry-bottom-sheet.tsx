import React from 'react';

import { View, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useHeaderHeight } from '@react-navigation/elements';

export interface JournalEntryBottomSheetProps {
  canPost?: boolean;
  entryText?: string;
  onPost?: () => void;
  onEntryTextChange?: (value: string) => void;
}

export function JournalEntryBottomSheet({
  canPost,
  entryText,
  onPost,
  onEntryTextChange,
}: JournalEntryBottomSheetProps) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={useHeaderHeight()}
      className="absolute bottom-0 w-full p-4 rounded-lg shadow-lg bg-white"
    >
      <SafeAreaView edges={['bottom']}>
        <View className="border-hairline border-slate-500 rounded-lg bg-neutral-100 flex-row items-end">
          <TextInput
            className="flex-1 p-2"
            placeholder="What's on your mind?"
            style={{
              fontSize: 16,
              lineHeight: 24,
              paddingTop: 0,
            }}
            multiline
            value={entryText}
            onChangeText={onEntryTextChange}
          />
          {canPost ? (
            <Pressable
              className="bg-orange-400 rounded-md items-center justify-center w-7 h-7 m-1"
              onPress={onPost}
            >
              <MaterialCommunityIcon
                name="arrow-up"
                color={'white'}
                size={19}
              />
            </Pressable>
          ) : null}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default JournalEntryBottomSheet;
