import { JournalEntry, JournalEntryItem } from '@nxify/ghostbot-data-model';
import { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { JournalEntryTimelineItem } from './journal-entry-timeline-item';

export interface JournalEntryTimelineProps {
  entry: JournalEntry | null;
}

export function JournalEntryTimeline({ entry }: JournalEntryTimelineProps) {
  const keyExtractor = useCallback(
    ({ _id }: JournalEntryItem) => _id.toHexString(),
    []
  );

  const renderItem: ListRenderItem<JournalEntryItem> = useCallback(
    (info) => <JournalEntryTimelineItem {...info} />,
    []
  );

  const data = useMemo(
    () => entry?.items.sorted([['timestamp', true]]),
    [entry]
  );

  return (
    <FlatList
      ListHeaderComponent={View}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={JournalEntryTimelineTheme.invertedContentContainer}
      inverted
    />
  );
}

const JournalEntryTimelineTheme = StyleSheet.create({
  invertedContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: 12,
  },
});

export default JournalEntryTimeline;
