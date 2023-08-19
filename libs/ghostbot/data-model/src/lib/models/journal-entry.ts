import { JournalEntryEvent } from './journal-entry-event';
import { journalDateInfo } from '../util/journal-date-info';

const JournalEntrySchema: Realm.ObjectSchema = {
  name: 'JournalEntry',
  properties: {
    _id: 'string',
    authorId: { type: 'string', mapTo: 'owner_id', indexed: true },
    date: { type: 'date', indexed: true },
    events: 'JournalEntryEvent[]',
  },
  primaryKey: '_id',
};

export class JournalEntry extends Realm.Object<JournalEntry, 'authorId'> {
  static schema = JournalEntrySchema;

  _id!: string;
  authorId!: string;
  date!: Date;
  events!: Realm.List<JournalEntryEvent>;

  constructor(realm: Realm, authorId: string);
  constructor(realm: Realm, authorId: string, date: Date);
  constructor(realm: Realm, authorId: string, date: number);
  constructor(
    realm: Realm,
    authorId: string,
    date: Date | number = new Date()
  ) {
    const { entryDate, entryId } = journalDateInfo(date, authorId);

    super(realm, {
      _id: entryId,
      authorId,
      date: entryDate,
    });
  }
}
