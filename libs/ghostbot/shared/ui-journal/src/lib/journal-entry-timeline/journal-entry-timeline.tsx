import { JournalEntry, JournalEntryItem } from '@nxify/ghostbot-data-model';
import { useCallback } from 'react';
import { FlatList } from 'react-native';
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
      data={entry?.items}
      keyExtractor={keyExtractor}
      renderItem={JournalEntryTimelineItem}
      className="m-4"
      inverted
    />
  );
}

export default JournalEntryTimeline;
