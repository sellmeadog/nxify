import { RealmProvider } from '@realm/react';
import { JournalEntry, JournalEntryItem } from '@nxify/ghostbot-data-model';
import { PropsWithChildren } from 'react';

export type GhostbotDataProviderProps = PropsWithChildren<
  Omit<Realm.Configuration, 'schema' | 'sync'>
>;

export function GhostbotDataProvider({
  children,
  ...rest
}: GhostbotDataProviderProps) {
  return (
    <RealmProvider schema={[JournalEntry, JournalEntryItem]} {...rest}>
      {children}
    </RealmProvider>
  );
}
