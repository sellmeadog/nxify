import { notFound } from 'next/navigation';
import { FragmentType, fragmentData, graphql } from '../../generated';
import { ArticleHero } from '../article-hero/article-hero';
import { ArticleMarkdown } from '../article-markdown/article-markdown';
import { ArticleAuthor } from '../article-author/article-author';

export const ArticleContentQueryFragment = graphql(`
  fragment ArticleContentQueryFragment on Query {
    article(where: { slug: $slug }) {
      ...ArticleHeroFragment
      ...ArticleMarkdownFragment
      ...ArticleAuthorFragment
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
      <ArticleMarkdown data={article} />
      <ArticleAuthor data={article} />
    </>
  );
}
