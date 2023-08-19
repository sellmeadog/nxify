import { JournalEntryEvent } from '@nxify/ghostbot-data-model';
import { useQuery, useRealm, useUser } from '@realm/react';
import { startOfDay } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';

export function useTodayScreen(): [
  state: {
    canPost: boolean;
    entries: ReadonlyArray<JournalEntryEvent>;
    entryText?: string;
  },
  setEntryText: (text: string) => void,
  postEntryItem: () => void
] {
  const realm = useRealm();
  const user = useUser();
  const entries = useQuery(JournalEntryEvent, (collection) =>
    collection.filtered(
      'date == $0 SORT (timestamp DESC)',
      startOfDay(new Date())
    )
  );

  const [entryText, setEntryText] = useState<string>();

  const postEntryItem = useCallback(() => {
    if (entryText) {
      realm.write(() => {
        new JournalEntryEvent(realm, user.id, entryText);
      });
    }

    setEntryText(undefined);
  }, [entryText, realm, user]);

  return [
    { canPost: Boolean(entryText), entries, entryText },
    setEntryText,
    postEntryItem,
  ];
}
