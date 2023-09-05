import { graphql } from '../../generated';
import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { ArticleContent } from '@nxify/kjd-ui-page-fragments';

const ArticleQuery = graphql(`
  query ArticleQuery($slug: String!) {
    ...ArticleContentQueryFragment
  }
`);

export interface ArticlePageProps {
  params: { slug: string };
}

export async function ArticlePage({ params }: ArticlePageProps) {
  const query = await hygraph.request(ArticleQuery, { slug: params.slug });

  return <ArticleContent data={query} />;
}
