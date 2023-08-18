import { JournalEntry, JournalEntryItem } from '@nxify/ghostbot-data-model';
import { useObject, useRealm, useUser } from '@realm/react';
import { useCallback, useEffect, useState } from 'react';
import { UpdateMode } from 'realm';

export function useTodayScreen(): [
  state: { canPost: boolean; entry: JournalEntry | null; entryText?: string },
  setEntryText: (text: string) => void,
  postEntryItem: () => void
] {
  const realm = useRealm();
  const user = useUser();
  const entry = useObject(JournalEntry, JournalEntry.currentEntryId());

  const [entryText, setEntryText] = useState<string>();

  useEffect(() => {
    realm.subscriptions.update((subscriptions) => {
      subscriptions.add(
        realm.objects(JournalEntry).filtered('owner_id == "$0"', user.id),
        { name: 'ownJournalEntry' }
      );
      subscriptions.add(
        realm.objects(JournalEntryItem).filtered('owner_id == "$0"', user.id),
        { name: 'ownJournalEntryItem' }
      );
    });

    return () => {
      realm.subscriptions.update((subscriptions) => {
        subscriptions.removeByName('ownJournalEntry');
        subscriptions.removeByName('ownJournalEntryItem');
      });
    };
  }, [realm, user]);

  const postEntryItem = useCallback(() => {
    if (entryText) {
      realm.write(() => {
        if (entry) {
          // const event = new JournalEntryItem(realm, {
          //   authorId: user.id,
          //   text: entryText,
          // });
          const event = realm.create(
            JournalEntryItem,
            { authorId: user.id, text: entryText },
            UpdateMode.Modified
          );
          entry.items.push(event);
        } else {
          realm.create(
            JournalEntry,
            {
              authorId: user.id,
              items: [
                {
                  authorId: user.id,
                  text: entryText,
                },
              ],
            },
            UpdateMode.Modified
          );
        }
      });
    }

    setEntryText(undefined);
  }, [entry, entryText, realm, user]);

  return [
    { canPost: Boolean(entryText), entry, entryText },
    setEntryText,
    postEntryItem,
  ];
}
