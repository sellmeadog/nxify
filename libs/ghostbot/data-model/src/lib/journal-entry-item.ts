import Realm, { BSON } from 'realm';
import { JournalEntry } from './journal-entry';

export const JournalEntryItemSchema: Realm.ObjectSchema = {
  name: 'JournalEntryItem',
  properties: {
    _id: { type: 'objectId', default: () => new BSON.ObjectID() },
    authorId: { type: 'string', mapTo: 'owner_id' },
    _entry: {
      type: 'linkingObjects',
      objectType: 'JournalEntry',
      property: 'items',
    },
    text: 'string',
    timestamp: { type: 'date', default: () => new Date(), indexed: true },
  },
  primaryKey: '_id',
};

export class JournalEntryItem extends Realm.Object<
  JournalEntryItem,
  'authorId' | 'text'
> {
  private _entry!: Realm.Results<JournalEntry>;

  _id = new BSON.ObjectId();
  authorId!: string;
  text!: string;
  timestamp!: Date;

  get entry(): JournalEntry {
    return this._entry[0];
  }

  static schema = JournalEntryItemSchema;
}
