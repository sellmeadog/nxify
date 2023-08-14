import { JournalEntry, JournalEntryItem } from '@nxify/ghostbot-data-model';
import { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { JournalEntryTimelineItem } from './journal-entry-timeline-item';

export interface JournalEntryTimelineProps {
  entry: JournalEntry | null;
}

export function JournalEntryTimeline({ entry }: JournalEntryTimelineProps) {
  const keyExtractor = useCallback(
    ({ _id }: JournalEntryItem): string => _id.toHexString(),
    []
  );

  return (
    <FlatList
      ListHeaderComponent={View}
      data={entry?.items.sorted([['timestamp', true]])}
      keyExtractor={keyExtractor}
      renderItem={JournalEntryTimelineItem}
      className={`m-4 flex-1`}
      inverted
    />
  );
}

export default JournalEntryTimeline;
