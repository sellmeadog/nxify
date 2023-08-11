import Realm from 'realm';
import { getUnixTime, startOfDay } from 'date-fns';
import { JournalEntryItem } from './journal-entry-item';

export const JournalEntrySchema: Realm.ObjectSchema = {
  name: 'JournalEntry',
  properties: {
    _id: { type: 'int', default: () => JournalEntry.currentEntryId() },
    date: {
      type: 'date',
      default: () => JournalEntry.currentEntryDate(),
      indexed: true,
    },
    items: 'JournalEntryItem[]',
  },
  primaryKey: '_id',
};

export class JournalEntry extends Realm.Object<JournalEntry> {
  _id!: Realm.Types.Int;
  date!: Realm.Types.Date;
  items!: Realm.List<JournalEntryItem>;

  static schema = JournalEntrySchema;

  static currentEntryDate = () => startOfDay(new Date());
  static currentEntryId = () => getUnixTime(JournalEntry.currentEntryDate());

  constructor(realm: Realm) {
    super(realm, {
      _id: JournalEntry.currentEntryId(),
      date: JournalEntry.currentEntryDate(),
    });
  }
}

// import Realm from 'realm';
// import { startOfDay } from 'date-fns';
// import { JournalEntryItem } from './journal-entry-item';

// const JournalEntrySchema: Realm.ObjectSchema = {
//   name: 'JournalEntry',
//   primaryKey: '_id',
//   properties: {
//     _id: { type: 'int', default: () => startOfDay(new Date()) },
//     items: { type: 'list', objectType: 'JournalEntryItem' },
//   },
// };

// export class JournalEntry extends Realm.Object<JournalEntry> {
//   _id!: Realm.Types.Int;
//   items!: Realm.List<JournalEntryItem>;

//   get date(): Date {
//     return new Date(this._id);
//   }

//   static schema = JournalEntrySchema;
// }
