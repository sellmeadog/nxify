import { JournalEntry, JournalEntryItem } from '@nxify/ghostbot-data-model';
import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { JournalEntryTimelineItem } from './journal-entry-timeline-item';

export interface JournalEntryTimelineProps {
  entry: JournalEntry | null;
}

export function JournalEntryTimeline({ entry }: JournalEntryTimelineProps) {
  const keyExtractor = useCallback(
    ({ _id }: JournalEntryItem): string => _id.toHexString(),
    []
  );

  const renderItem: ListRenderItem<JournalEntryItem> = useCallback(
    ({ item }) => <JournalEntryTimelineItem item={item} />,
    []
  );

  return (
    <FlatList
      data={entry?.items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      className="m-4"
    />
  );
}

export default JournalEntryTimeline;
