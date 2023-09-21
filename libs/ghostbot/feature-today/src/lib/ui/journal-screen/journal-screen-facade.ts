import { JournalEntry } from '@nxify/ghostbot-data-model';
import { useQuery } from '@realm/react';

export function useJournalScreen(): [data: ReadonlyArray<JournalEntry>] {
  const results = useQuery(JournalEntry, (collection) =>
    collection.sorted([['date', false]])
  );

  return [results];
}
