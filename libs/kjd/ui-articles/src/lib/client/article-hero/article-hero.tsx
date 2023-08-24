import { format, parseISO } from 'date-fns';
import { FragmentType, useFragment } from '../../generated';
import { ArticleHeroFragmentDoc } from '../../generated/graphql';

export interface ArticleHeroProps {
  fragment?: FragmentType<typeof ArticleHeroFragmentDoc> | null;
}

export function ArticleHero({ fragment }: ArticleHeroProps) {
  const article = useFragment(ArticleHeroFragmentDoc, fragment);

  if (!article) {
    return null;
  }

  const { createdAt, title } = article;

  return (
    <div className="bg-neutral-800">
      <header className="max-w-prose mx-auto p-4 md:px-0 md:py-8 lg:py-16">
        <section className="flex flex-col gap-1">
          <p className="font-bold !m-0 !p-0 text-neutral-400 text-xs md:text-sm uppercase">
            {format(parseISO(createdAt), 'PPP')}
          </p>
          <h1 className="font-light !m-0 !p-0">{title}</h1>
        </section>
      </header>
    </div>
  );
}

export default ArticleHero;
