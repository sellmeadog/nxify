import { JournalEntryEvent } from '@nxify/ghostbot-data-model';
import { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { JournalEntryTimelineItem } from './journal-entry-timeline-item';

export interface JournalEntryTimelineProps {
  entries: ReadonlyArray<JournalEntryEvent>;
}

export function JournalEntryTimeline({ entries }: JournalEntryTimelineProps) {
  const keyExtractor = useCallback(
    ({ _id }: JournalEntryEvent) => _id.toHexString(),
    []
  );

  const renderItem: ListRenderItem<JournalEntryEvent> = useCallback(
    (info) => <JournalEntryTimelineItem {...info} />,
    []
  );

  return (
    <FlatList
      ListHeaderComponent={View}
      data={entries}
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
