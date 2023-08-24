import { ArticleBody, ArticleHero } from '@nxify/kjd-ui-articles';
import { graphql } from '../../generated';
import { GraphQLClient } from 'graphql-request';

const ArticlePageRoute = graphql(`
  query ArticleBySlug($slug: String!) {
    article(where: { slug: $slug }) {
      ...ArticleHero
      ...ArticleBody
    }
  }
`);

const client = new GraphQLClient(process.env.KJD_HYGRAPH_ENDPOINT);

export interface ArticlePageProps {
  params: { slug: string };
}

export async function ArticlePage({ params }: ArticlePageProps) {
  console.log(params.slug);
  const query = await client.request(ArticlePageRoute, { slug: params.slug });

  return (
    <>
      <ArticleHero fragment={query.article} />
      <ArticleBody fragment={query.article} />
    </>
  );
}
