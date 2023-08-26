import { format, parseISO } from 'date-fns';
import { FragmentType, useFragment } from '../../generated';
import { ArticleHeroFragmentDoc } from '../../generated/graphql';
import { CenterColumn } from '@nxify/kjd-ui-layout';

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
    <CenterColumn variant="hero">
      <section className="flex flex-col gap-1">
        <p className="font-bold !m-0 !p-0 text-neutral-400 text-xs md:text-sm uppercase">
          {format(parseISO(createdAt), 'PPP')}
        </p>
        <h1 className="font-light !m-0 !p-0">{title}</h1>
      </section>
    </CenterColumn>
  );
}

export default ArticleHero;
