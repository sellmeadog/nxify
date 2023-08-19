import {
  JournalEntry,
  JournalEntryEvent,
  journalDateInfo,
} from '@nxify/ghostbot-data-model';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { useCallback, useState } from 'react';
import { BSON } from 'realm';

export function useTodayScreen(): [
  state: {
    canPost: boolean;
    entries: ReadonlyArray<JournalEntryEvent>;
    entryText?: string;
  },
  setEntryText: (text: string) => void,
  addEvent: () => void
] {
  const realm = useRealm();
  const user = useUser();
  const { entryDate, entryId, eventTimestamp } = journalDateInfo(user.id);

  const entry = useObject(JournalEntry, entryId);
  const results = useQuery(JournalEntryEvent, (collection) =>
    collection.filtered('date == $0 SORT (timestamp DESC)', entryDate)
  );

  const [entryText, setEntryText] = useState<string>();

  const addEvent = useCallback(() => {
    if (entryText) {
      realm.write(() => {
        let _entry = entry;

        if (!_entry) {
          _entry = realm.create(JournalEntry, {
            _id: entryId,
            authorId: user.id,
            date: entryDate,
          });
        }

        _entry.events.push(
          realm.create(JournalEntryEvent, {
            _id: new BSON.ObjectID(),
            authorId: user.id,
            date: entryDate,
            text: entryText,
            timestamp: eventTimestamp,
            type: 'event',
          })
        );
      });
    }

    setEntryText(undefined);
  }, [entry, entryDate, eventTimestamp, entryId, entryText, realm, user]);

  return [
    { canPost: Boolean(entryText), entries: results, entryText },
    setEntryText,
    addEvent,
  ];
}
