import { format, parseISO } from 'date-fns';
import { FragmentType, useFragment } from '../../generated';
import { ArticlePreviewFragmentDoc } from '../../generated/graphql';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ArticlePreviewProps {
  fragment: FragmentType<typeof ArticlePreviewFragmentDoc>;
}

export function ArticlePreview({ fragment }: ArticlePreviewProps) {
  const { createdAt, excerpt, title } = useFragment(
    ArticlePreviewFragmentDoc,
    fragment
  );

  return (
    <article className="flex flex-col border-b border-neutral-800 last-of-type:border-transparent gap-y-4 max-w-5xl mx-auto p-4 text-neutral-200 md:p-8 lg:p-16">
      <header className="flex flex-col gap-y-px">
        <Link href={'/'}>
          <h2 className="text-cyan-400 text-lg md:text-2xl lg:text-3xl hover:text-cyan-300">
            {title}
          </h2>
        </Link>
        <p className="text-neutral-400 text-sm uppercase">
          {format(parseISO(createdAt), 'PPP')}
        </p>
      </header>
      <main>
        <p className="text-base">{excerpt}</p>
      </main>
    </article>
  );
}
