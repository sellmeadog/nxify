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
    <article className="prose prose-invert prose-sm prose-a:text-cyan-300 prose-blockquote:font-serif prose-blockquote:border-amber-500 max-w-none md:prose-base lg:prose-lg">
      <ArticleHero fragment={query.article} />
      <ArticleBody fragment={query.article} />
    </article>
  );
}
