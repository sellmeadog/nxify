import { JournalEntryItem } from '@nxify/ghostbot-data-model';
import { format } from 'date-fns';
import { useCallback } from 'react';
import { ListRenderItemInfo, Pressable, Text, View } from 'react-native';

export type JournalEntryTimelineItemProps =
  ListRenderItemInfo<JournalEntryItem>;

export function JournalEntryTimelineItem({
  item,
}: JournalEntryTimelineItemProps) {
  const handleLongPress = useCallback(() => {
    console.log('LONG_PRESS');
  }, []);

  return (
    <Pressable onLongPress={handleLongPress}>
      <View className="flex-row items-center">
        <View className="w-2 h-2 rounded-full bg-amber-500" />
        <Text className="font-bold text-xs uppercase flex-1 ml-2 text-slate-800">
          {format(item.timestamp, 'p')}
        </Text>
      </View>
      <View className="flex-row">
        <View className="w-2 items-center">
          <View className="w-0 border-hairline border-slate-500 flex-1" />
        </View>
        <Text className="text-base mb-2 ml-2 flex-1">{item.text}</Text>
      </View>
    </Pressable>
  );
}
