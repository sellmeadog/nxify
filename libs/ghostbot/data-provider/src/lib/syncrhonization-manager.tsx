import { JournalEntry, JournalEntryEvent } from '@nxify/ghostbot-data-model';
import { useRealm } from '@realm/react';
import { PropsWithChildren, useEffect } from 'react';

export function SynchronizationManager({ children }: PropsWithChildren) {
  const realm = useRealm();

  useEffect(() => {
    realm.subscriptions.update((subs) => {
      subs.add(realm.objects(JournalEntry));
      subs.add(realm.objects(JournalEntryEvent));
    });
  }, [realm]);

  return children;
}
