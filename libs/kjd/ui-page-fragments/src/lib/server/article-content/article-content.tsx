import { notFound } from 'next/navigation';
import { FragmentType, fragmentData, graphql } from '../../generated';
import { ArticleHero } from '../article-hero/article-hero';

const ArticleContentQueryFragment = graphql(`
  fragment ArticleContentQueryFragment on Query {
    article(where: { slug: $slug }) {
      ...ArticleHeroFragment
    }
  }
`);

export interface ArticleContentProps {
  data: FragmentType<typeof ArticleContentQueryFragment>;
}

export function ArticleContent({ data }: ArticleContentProps) {
  const { article } = fragmentData(ArticleContentQueryFragment, data);

  if (!article) {
    return notFound();
  }

  return (
    <>
      <ArticleHero data={article} />
      <div></div>
    </>
  );
}
