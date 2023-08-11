import { JournalEntry, JournalEntryItem } from '@nxify/ghostbot-data-model';
import { useObject, useRealm } from '@realm/react';
import { useCallback, useState } from 'react';

export function useTodayScreen(): [
  state: { canPost: boolean; entry: JournalEntry | null; entryText?: string },
  setEntryText: (text: string) => void,
  postEntryItem: () => void
] {
  const realm = useRealm();
  const entry = useObject(JournalEntry, JournalEntry.currentEntryId());

  const [entryText, setEntryText] = useState<string>();

  const postEntryItem = useCallback(() => {
    if (entryText) {
      realm.write(() => {
        if (entry) {
          entry.items.push(new JournalEntryItem(realm, { text: entryText }));
        } else {
          const _entry = new JournalEntry(realm);
          _entry.items.push(new JournalEntryItem(realm, { text: entryText }));
        }
      });
    }

    setEntryText(undefined);
  }, [entry, entryText, realm]);

  return [
    { canPost: Boolean(entryText), entry, entryText },
    setEntryText,
    postEntryItem,
  ];
}
