import { ArticlePreviewData } from '@nxify/kjd-data-access-article';
import { format, parseISO } from 'date-fns';

export type ArticlePreviewProps = ArticlePreviewData;

export function ArticlePreview({
  createdAt,
  excerpt,
  title,
}: ArticlePreviewProps) {
  return (
    <article className="flex flex-col gap-3 p-4 md:p-8 lg:p-16 border-b border-b-neutral-700 last-of-type:border-b-transparent">
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl text-cyan-300">{title}</h2>
        <p className="text-md text-neutral-400 uppercase font-bold">
          {format(parseISO(createdAt), 'PPP')}
        </p>
      </header>
      <p className="text-lg text-neutral-200">{excerpt}</p>
    </article>
  );
}
