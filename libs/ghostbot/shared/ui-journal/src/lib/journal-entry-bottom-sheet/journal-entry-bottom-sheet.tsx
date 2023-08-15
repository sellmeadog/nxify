import React from 'react';

import { View, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useHeaderHeight } from '@react-navigation/elements';
import { StyledComponent } from 'nativewind';

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
  const { bottom } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={useHeaderHeight() + 6 - bottom}
      className="w-full p-3 shadow-sm bg-white"
    >
      <SafeAreaView edges={['bottom']}>
        <View className="border-hairline border-slate-500 rounded-lg bg-neutral-100 flex-row ">
          <TextInput
            className="flex-1 p-2 self-center"
            placeholder="What's on your mind?"
            multiline
            value={entryText}
            onChangeText={onEntryTextChange}
            style={{ fontSize: 16 }}
          />
          <Pressable
            className="items-center justify-center self-end"
            onPress={onPost}
          >
            <StyledComponent
              component={MaterialCommunityIcon}
              name="send"
              className={`${
                canPost ? 'text-orange-400' : 'text-neutral-400'
              } py-2 pr-2`}
              size={24}
            ></StyledComponent>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default JournalEntryBottomSheet;
