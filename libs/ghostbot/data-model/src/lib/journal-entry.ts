import { startOfDay } from 'date-fns';
import { BSON } from 'realm';

const JournalEntrySchema: Realm.ObjectSchema = {
  name: 'JournalEntry',
  properties: {
    _id: 'objectId',
    authorId: { type: 'string', mapTo: 'owner_id', indexed: true },
    date: { type: 'date', indexed: true },
  },
  primaryKey: '_id',
};

export class JournalEntry extends Realm.Object<JournalEntry, 'authorId'> {
  static schema = JournalEntrySchema;

  _id = new BSON.ObjectID();
  authorId!: string;
  date!: Date;

  constructor(realm: Realm, authorId: string);
  constructor(realm: Realm, authorId: string, date: Date);
  constructor(realm: Realm, authorId: string, date: number);
  constructor(
    realm: Realm,
    authorId: string,
    date: Date | number = new Date()
  ) {
    super(realm, { authorId, date: startOfDay(date) });
  }
}
