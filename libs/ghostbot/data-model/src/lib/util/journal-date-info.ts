import { getTime, startOfDay } from 'date-fns';

type AnonymousJournalDateInfo = {
  entryDate: Date;
  entryId: null;
  entryTimestamp: number;
  eventDate: Date;
  eventTimestamp: number;
};
type AuthorizedJournalDateInfo = {
  entryDate: Date;
  entryId: string;
  entryTimestamp: number;
  eventDate: Date;
  eventTimestamp: number;
};

export function journalDateInfo(): AnonymousJournalDateInfo;
export function journalDateInfo(authorId: string): AuthorizedJournalDateInfo;
export function journalDateInfo(date: Date | number): AnonymousJournalDateInfo;
export function journalDateInfo(
  date: Date | number,
  authorId: string
): AuthorizedJournalDateInfo;
export function journalDateInfo(
  argOne: Date | number | string = new Date(),
  argTwo?: string
): AnonymousJournalDateInfo | AuthorizedJournalDateInfo {
  const date = typeof argOne === 'string' ? new Date() : argOne;
  const authorId = argTwo ? argTwo : argOne;

  const entryDate = startOfDay(date);
  const entryTimestamp = getTime(entryDate);
  const entryId = authorId ? `${authorId}|${entryTimestamp}` : null;
  const eventTimestamp = getTime(date);

  return {
    entryDate,
    entryId,
    entryTimestamp,
    eventDate: entryDate,
    eventTimestamp,
  };
}
