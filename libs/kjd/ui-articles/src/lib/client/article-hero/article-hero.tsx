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

  const { author, createdAt, title } = article;

  return (
    <div className="bg-neutral-800">
      <header className="max-w-5xl mx-auto p-4 text-neutral-200 gap-y-4 md:gap-y-6 md:p-8 lg:p-16">
        <section className="flex flex-col justify-center gap-y-2 md:col-span-2">
          <h1 className="text-5xl">{title}</h1>
          <p className="text-base text-neutral-400 uppercase">
            {author?.name}
            &nbsp;&mdash;&nbsp;
            {format(parseISO(createdAt), 'PPP')}
          </p>
        </section>
      </header>
    </div>
  );
}

export default ArticleHero;
