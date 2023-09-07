import { graphql } from '../../generated';
import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { ArticleContent } from '@nxify/kjd-ui-page-fragments';
import { Metadata } from 'next';

const ArticleQuery = graphql(`
  query ArticleQuery($slug: String!) {
    ...ArticleContentQueryFragment
  }
`);

const ArticleMetadataQuery = graphql(`
  query ArticleMetadataQuery($slug: String!) {
    article(where: { slug: $slug }) {
      author {
        name
      }
      createdAt
      hero {
        caption
        title
      }
      tags {
        tag
      }
    }
  }
`);

export interface ArticlePageProps {
  params: { slug: string };
}

export async function ArticlePage({ params }: ArticlePageProps) {
  const query = await hygraph.request(ArticleQuery, { slug: params.slug });

  return <ArticleContent data={query} />;
}

export async function articleMetadataGenerator({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article } = await hygraph.request(ArticleMetadataQuery, {
    slug: params.slug,
  });

  return {
    authors: [{ name: article?.author?.name }],
    description: article?.hero?.caption,
    keywords: article?.tags.map(({ tag }) => tag),
    title: `${article?.hero?.title} - kennie j. davis`,
  };
}
