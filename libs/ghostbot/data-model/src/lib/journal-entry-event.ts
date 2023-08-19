import { getTime, startOfDay } from 'date-fns';
import { BSON } from 'realm';

const JournalEntryEventSchema: Realm.ObjectSchema = {
  name: 'JournalEntryEvent',
  properties: {
    _id: { type: 'objectId', default: () => new BSON.ObjectID() },
    authorId: { type: 'string', mapTo: 'owner_id', indexed: true },
    date: {
      type: 'date',
      indexed: true,
      default: () => startOfDay(new Date()),
    },
    text: { type: 'string', indexed: true },
    timestamp: {
      type: 'int',
      indexed: true,
      default: () => getTime(new Date()),
    },
    type: { type: 'string', default: () => 'event' },
  },
  primaryKey: '_id',
};

export type JournalEntryEventType = 'event' | 'prompt';

export class JournalEntryEvent extends Realm.Object<
  JournalEntryEvent,
  'authorId' | 'text'
> {
  static schema = JournalEntryEventSchema;

  _id = new BSON.ObjectID();
  authorId!: string;
  text!: string;
  date!: Date;
  timestamp!: Realm.Types.Int;
  type!: JournalEntryEventType;

  constructor(realm: Realm, authorId: string, text: string);
  constructor(
    realm: Realm,
    authorId: string,
    text: string,
    type: JournalEntryEventType = 'event',
    date = startOfDay(new Date()),
    timestamp = getTime(new Date())
  ) {
    super(realm, { authorId, date, timestamp, text, type });
  }
}
