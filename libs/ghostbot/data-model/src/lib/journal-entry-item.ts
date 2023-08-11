import Realm, { BSON } from 'realm';
import { JournalEntry } from './journal-entry';

export const JournalEntryItemSchema: Realm.ObjectSchema = {
  name: 'JournalEntryItem',
  properties: {
    _id: { type: 'objectId', default: () => new BSON.ObjectID() },
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

export class JournalEntryItem extends Realm.Object<JournalEntryItem, 'text'> {
  private _entry!: Realm.Results<JournalEntry>;

  _id = new BSON.ObjectId();
  text!: string;
  timestamp!: Date;

  get entry(): JournalEntry {
    return this._entry[0];
  }

  static schema = JournalEntryItemSchema;
}

// import Realm from 'realm';
// import { getUnixTime } from 'date-fns';
// import { JournalEntry } from './journal-entry';

// const JournalEntryItemSchema: Realm.ObjectSchema = {
//   name: 'JournalEntry',
//   primaryKey: '_id',
//   properties: {
//     _id: { type: 'int', default: () => getUnixTime(new Date()) },
//     text: 'string',
//     _parent: {
//       type: 'linkingObjects',
//       objectType: 'JournalEntry',
//       property: 'items',
//     },
//   },
// };

// export class JournalEntryItem extends Realm.Object<JournalEntryItem> {
//   private _parent!: Realm.Results<JournalEntry>;

//   _id!: Realm.Types.Int;
//   text!: string;

//   get timestamp(): Realm.Types.Int {
//     return this._id;
//   }

//   get entry(): JournalEntry {
//     return this._parent[0];
//   }

//   static schema = JournalEntryItemSchema;
// }
